# FileSystemManager.writeFileSync

[FileSystemManager.writeFile](./writeFile.md) 的同步方法

### 参数

**string dirPath**

要写入的文件路径 (本地路径)

**string | ArrayBuffer data**

要写入的文本或二进制数据

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

**number position**

从文件指定位置开始读，如果不指定，则从文件头开始读。读取的范围应该是左闭右开区间 [position, position+length)。有效范围：[0, fileLength - 1]。单位：byte

**number length**

指定文件的长度，如果不指定，则读到文件末尾。有效范围：[1, fileLength]。单位：byte

文件内容

### Example

```ts
const fs = ek.getFileSystemManager()
try {
  fs.writeFileSync(
    `${ek.env.USER_DATA_PATH}/hello.txt`,
    'some text or arrayBuffer',
    'utf8')
} catch (e) {
  console.log(e)
}
```
