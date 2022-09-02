# FileSystemManager.accessSync

[FileSystemManager.access](./access.md) 的同步方法

### 参数

**string path**

要判断是否存在的文件/目录路径 (本地路径)

### Example

```ts
const fs = ek.getFileSystemManager()
try {
  fs.accessSync(`${ek.env.USER_DATA_PATH}/hello.txt`)
  // 文件存在
} catch (e) {
  // 文件不存在或其他错误
  console.log(e)
}
```
