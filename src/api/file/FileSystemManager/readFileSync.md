# FileSystemManager.readFileSync

[FileSystemManager.readFile](./readFile.md) 的同步方法

### 参数

**string dirPath**

要读取的文件的路径 (本地路径)

**string encoding**

指定读取文件的字符编码，如果不传 encoding，则以 ArrayBuffer 格式读取文件的二进制内容

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

### 返回值

**string | ArrayBuffer data**

文件内容

### Example

```ts
const fs = ek.getFileSystemManager()
try {
  const data = fs.readFileSync(`${ek.env.USER_DATA_PATH}/hello.txt`, 'utf8', 0)
  console.log(data)
} catch (e) {
  console.log(e)
}
```
