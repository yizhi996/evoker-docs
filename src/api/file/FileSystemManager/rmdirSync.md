# FileSystemManager.rmdirSync

[FileSystemManager.rmdir](./rmdir.md) 的同步方法

### 参数

**string dirPath**

要删除的目录路径 (本地路径)

**boolean recursive**

是否递归删除目录。如果为 true，则删除该目录和该目录下的所有子目录以及文件

### Example

```ts
const fs = ek.getFileSystemManager()
try {
  fs.rmdirSync(`${ek.env.USER_DATA_PATH}/example`, true)
} catch (e) {
  console.log(e)
}
```
