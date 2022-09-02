# FileSystemManager.renameSync

[FileSystemManager.rename](./rename.md) 的同步方法

### 参数

**string oldPath**

源文件路径，支持本地路径

**string newPath**

新文件路径，支持本地路径

### Example

```ts
const fs = ek.getFileSystemManager()
try {
  fs.renameSync(
    `${ek.env.USER_DATA_PATH}/hello.txt`,
    `${ek.env.USER_DATA_PATH}/hello_new.txt`
  )
} catch (e) {
  console.log(e)
}
```
