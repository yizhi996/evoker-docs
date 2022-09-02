# FileSystemManager.mkdirSync

[FileSystemManager.mkdir](./mkdir.md) 的同步方法

### 参数

**string dirPath**

创建的目录路径 (本地路径)

**boolean recursive**

是否在递归创建该目录的上级目录后再创建该目录。如果对应的上级目录已经存在，则不创建该上级目录。如 dirPath 为 a/b/c/d 且 recursive 为 true，将创建 a 目录，再在 a 目录下创建 b 目录，以此类推直至创建 a/b/c 目录下的 d 目录

### Example

```ts
const fs = ek.getFileSystemManager()
try {
  fs.mkdirSync(`${ek.env.USER_DATA_PATH}/example`, true)
} catch (e) {
  console.log(e)
}
```
