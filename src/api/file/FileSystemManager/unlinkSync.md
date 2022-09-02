# FileSystemManager.unlinkSync

[FileSystemManager.unlink](./unlink.md) 的同步方法

### 参数

**string dirPath**

要删除的文件路径 (本地路径)

### Example

```ts
const fs = ek.getFileSystemManager()
try {
  fs.unlinkSync(`${ek.env.USER_DATA_PATH}/hello.txt`)
} catch (e) {
  console.log(e)
}
```
