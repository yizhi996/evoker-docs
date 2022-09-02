# FileSystemManager.saveFileSync

[FileSystemManager.saveFile](./saveFile.md) 的同步方法

### 参数

**string tempFilePath**

临时存储文件路径 (本地路径)

**string filePath**

要存储的文件路径 (本地路径)

### 返回值

**string savedFilePath**

存储后的文件路径 (本地路径)

### Example

```ts
try {
  const res = await ek.chooseImage({ count: 1 })
  const tempFilePath = res.tempFilePaths[0]

  const fs = ek.getFileSystemManager()
  const savedFilePath = fs.saveFileSync({ tempFilePath })
  console.log(savedFilePath)
} catch (e) {
  console.log(e)
}
```
