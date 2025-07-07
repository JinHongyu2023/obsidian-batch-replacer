# Obsidian Batch Replacer

An Obsidian plugin to find and replace text in all notes within a specified folder and its subfolders. It supports simple wildcards (`*` and `?`) for powerful batch operations.

## Features

- **Folder-based Operation**: Activate the replacement command by right-clicking on a folder in the Obsidian file explorer.
- **Wildcard Support**: Use `*` to match any sequence of characters and `?` to match any single character.
- **Recursive Replacement**: The plugin processes all `.md` files in the selected folder and all of its subfolders.
- **User-friendly Interface**: A simple dialog prompts for the text to find and the text to replace it with.
- **Safe and Informative**: Reports the number of files modified after the operation is complete.

## How to Use

1.  **Install the Plugin**: Follow the installation instructions below.
2.  **Right-Click a Folder**: In the Obsidian file explorer, right-click on the folder you want to process.
3.  **Select the Command**: From the context menu, choose `Batch Replace in Folder`.
4.  **Enter Text**: 
    - In the "Find" field, enter the text you want to replace. You can use wildcards. For example, `task*` would find `task`, `tasks`, `task-list`, etc.
    - In the "Replace with" field, enter the new text.
5.  **Execute**: Click the `Execute Replace` button.
6.  **Done**: A notification will appear confirming how many files were changed.

## Installation

### From the Community Plugins Store (Coming Soon)

Once the plugin is accepted, you will be able to install it directly from the Obsidian Community Plugins store.

### Manual Installation

1.  Download the `main.js`, `manifest.json`, and `styles.css` (if available) from the [latest release](https://github.com/your-username/obsidian-batch-replacer/releases).
2.  Go to your Obsidian vault's plugin folder: `VaultFolder/.obsidian/plugins/`.
3.  Create a new folder named `batch-replacer`.
4.  Copy the downloaded files into the `batch-replacer` folder.
5.  Reload Obsidian or refresh the plugin list.
6.  Enable the "Batch Replacer" plugin in the settings.

## For Developers

To contribute or modify the plugin:

1.  Clone this repository.
2.  Run `npm install` to install the dependencies.
3.  Run `npm run dev` to start the development server, which will automatically recompile the plugin on file changes.

## Disclaimer

This plugin modifies your files directly. While care has been taken to make it reliable, please **always back up your vault** before performing a large batch operation.

## License

This plugin is licensed under the [MIT License](LICENSE).