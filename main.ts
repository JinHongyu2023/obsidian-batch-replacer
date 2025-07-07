import { App, Modal, Notice, Plugin, TAbstractFile, TFolder } from 'obsidian';

// Main Plugin Class
export default class BatchReplacerPlugin extends Plugin {
    onload() {
        this.registerEvent(
            this.app.workspace.on('file-menu', (menu, file) => {
                if (file instanceof TFolder) {
                    menu.addItem((item) => {
                        item
                            .setTitle('Batch Replace in Folder')
                            .setIcon('replace-all')
                            .onClick(() => {
                                new ReplacementModal(this.app, file, (find, replace) => {
                                    this.executeReplacement(file, find, replace);
                                }).open();
                            });
                    });
                }
            })
        );
    }

    // Converts wildcard input to a regular expression
    wildcardToRegex(wildcard: string): RegExp {
        const escaped = wildcard.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
        const regexString = escaped
            .replace(/\\\*/g, '.*')
            .replace(/\\\?/g, '.');
        return new RegExp(regexString, 'g');
    }

    // Executes the replacement logic
    async executeReplacement(folder: TFolder, findStr: string, replaceStr: string) {
        if (!findStr) {
            new Notice('Find string cannot be empty.');
            return;
        }

        const findRegex = this.wildcardToRegex(findStr);
        let modifiedFileCount = 0;

        const filesToProcess = await this.getMarkdownFiles(folder);

        for (const file of filesToProcess) {
            if (file instanceof TFolder) continue;
            const originalContent = await this.app.vault.read(file as any);
            if (findRegex.test(originalContent)) {
                const newContent = originalContent.replace(findRegex, replaceStr);
                await this.app.vault.modify(file as any, newContent);
                modifiedFileCount++;
            }
        }

        new Notice(`Batch replacement complete. Modified ${modifiedFileCount} file(s).`);
    }

    // Recursively gets all markdown files in a folder
    async getMarkdownFiles(folder: TFolder): Promise<TAbstractFile[]> {
        const files: TAbstractFile[] = [];
        for (const child of folder.children) {
            if (child instanceof TFolder) {
                files.push(...(await this.getMarkdownFiles(child)));
            } else if (child.path.endsWith('.md')) {
                files.push(child);
            }
        }
        return files;
    }
}

// Modal for user input
class ReplacementModal extends Modal {
    findStr: string = '';
    replaceStr: string = '';
    folder: TFolder;
    onSubmit: (find: string, replace: string) => void;

    constructor(app: App, folder: TFolder, onSubmit: (find: string, replace: string) => void) {
        super(app);
        this.folder = folder;
        this.onSubmit = onSubmit;
    }

    onOpen() {
        const { contentEl } = this;
        contentEl.createEl('h2', { text: 'Batch Replace' });
        contentEl.createEl('p', { text: `In folder: "${this.folder.name}"` });

        // Find input
        contentEl.createDiv({ cls: 'setting-item' }, (setting) => {
            setting.createEl('div', { text: 'Find', cls: 'setting-item-name' });
            const input = setting.createEl('input', { type: 'text' });
            input.style.width = '100%';
            input.oninput = (e) => this.findStr = (e.target as HTMLInputElement).value;
        });

        // Replace input
        contentEl.createDiv({ cls: 'setting-item' }, (setting) => {
            setting.createEl('div', { text: 'Replace with', cls: 'setting-item-name' });
            const input = setting.createEl('input', { type: 'text' });
            input.style.width = '100%';
            input.oninput = (e) => this.replaceStr = (e.target as HTMLInputElement).value;
        });

        // Submit button
        contentEl.createDiv({ cls: 'setting-item' }, (setting) => {
            const button = setting.createEl('button', { text: 'Execute Replace' });
            button.onclick = () => {
                this.onSubmit(this.findStr, this.replaceStr);
                this.close();
            };
        });
    }

    onClose() {
        this.contentEl.empty();
    }
}