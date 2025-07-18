# Obsidian 批量替换插件

一个 Obsidian 插件，用于在指定文件夹及其子文件夹的所有笔记中查找和替换文本。它支持简单的通配符（`*` 和 `?`），以实现强大的批量操作。

## 功能特性

- **基于文件夹的操作**: 在 Obsidian 文件管理器中右键单击文件夹即可激活替换命令。
- **通配符支持**: 使用 `*` 匹配任意字符序列，使用 `?` 匹配任意单个字符。
- **递归替换**: 插件会处理所选文件夹及其所有子文件夹中的全部 `.md` 文件。
- **用户友好界面**: 一个简洁的对话框会提示您输入要查找和替换的文本。
- **安全且信息明确**: 操作完成后，会报告修改的文件总数。

## 如何使用

1.  **安装插件**: 请遵循下面的安装说明。
2.  **右键单击文件夹**: 在 Obsidian 文件管理器中，右键单击您要处理的文件夹。
3.  **选择命令**: 从右键菜单中选择 `Batch Replace in Folder`。
4.  **输入文本**: 
    - 在 “Find” 输入框中，输入您想替换的文本。您可以使用通配符。例如，`task*` 会找到 `task`、`tasks`、`task-list` 等。
    - 在 “Replace with” 输入框中，输入新的文本。
5.  **执行**: 点击 `Execute Replace` 按钮。
6.  **完成**: 一个通知将会弹出，确认有多少文件被更改。

## 安装方法

### 从社区插件市场安装 (即将推出)

一旦插件被审核通过，您将能够直接从 Obsidian 社区插件市场安装它。

### 手动安装

1.  从 [最新发布版本](https://github.com/JinHongyu2023/obsidian-batch-replacer/releases) 下载 `main.js`, `manifest.json` 和 `styles.css` (如果存在)。
2.  进入您的 Obsidian Vault 的插件文件夹: `Vault路径/.obsidian/plugins/`。
3.  创建一个名为 `batch-replacer` 的新文件夹。
4.  将下载的文件复制到 `batch-replacer` 文件夹中。
5.  重新加载 Obsidian 或刷新插件列表。
6.  在设置中启用 “Batch Replacer” 插件。

## 开发者指南

如需贡献代码或修改此插件：

1.  克隆此仓库。
2.  运行 `npm install` 安装依赖。
3.  运行 `npm run dev` 启动开发服务器，它会在文件更改时自动重新编译插件。

## 免责声明

此插件会直接修改您的文件。虽然我们已尽力确保其可靠性，但在执行大规模批量操作前，请**务必备份您的 Vault**。

## 许可证

此插件采用 [MIT 许可证](LICENSE)。
