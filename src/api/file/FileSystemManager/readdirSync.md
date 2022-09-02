# FileSystemManager.readdirSync

[FileSystemManager.readdir](./readdir.md) 的同步方法

### 参数

**string dirPath**

要读取的目录路径 (本地路径)

### 返回值

**string[] files**

指定目录下的文件名数组

### Example

```ts
const fs = ek.getFileSystemManager()
try {
  const files = fs.readdirSync(`${ek.env.USER_DATA_PATH}/example`)
  console.log(files)
} catch (e) {
  console.log(e)
}
```
