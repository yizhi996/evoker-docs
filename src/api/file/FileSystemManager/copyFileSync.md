# FileSystemManager.copyFileSync

[FileSystemManager.copyFile](./copyFile.md) 的同步方法

### 参数

**string srcPath**

源文件路径，支持本地路径

**string | destPath**

目标文件路径，支持本地路径

### Example

```ts
const fs = ek.getFileSystemManager()
try {
  fs.copyFileSync(`${ek.env.USER_DATA_PATH}/hello.txt`, `${ek.env.USER_DATA_PATH}/hello_copy.txt`)
} catch (e) {
  console.log(e)
}
```
