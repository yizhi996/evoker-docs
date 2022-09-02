# FileSystemManager.appendFileSync

[FileSystemManager.appendFile](./appendFile.md) 的同步方法

### 参数

**string filePath**

要追加内容的文件路径 (本地路径)

**string | ArrayBuffer data**

要追加的文本或二进制数据

**string encoding**

指定写入文件的字符编码

encoding 的合法值
| 值 | 说明 |
| ---- | ---- |
| ascii | |
| base64 | |
| binary | |
| hex | |
| ucs2 | 以小端序读取 |
| ucs-2 | 以小端序读取 |
| utf16le | 以小端序读取 |
| utf-16le | 以小端序读取 |
| utf-8 | |
| utf8 | |
| latin1 | |

### Example

```ts
const fs = ek.getFileSystemManager()
try {
  fs.appendFileSync(`${ek.env.USER_DATA_PATH}/hello.txt`, 'some text', 'utf8')
} catch (e) {
  console.log(e)
}
```
