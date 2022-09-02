# FileSystemManager.getSavedFileList

> 以 Promise 风格调用：不支持

获取该小程序下已保存的本地缓存文件列表

### 参数

<Props options />

### 成功返回

<Results :data="results" />

### FileItem

<Results :data="fileItem" />

### Example

```ts
const fs = ek.getFileSystemManager()
fs.getSavedFileList({
  success: res => {
    console.log(res)
  },
  fail: err => {
    console.error(err)
  }
})
```

<script setup>
const results = [
  {
    name: 'fileList',
    type: 'FileItem[]',
    desc: "文件数组，每一项是一个 FileItem"
  },
]

const fileItem = [
  {
    name: 'filePath',
    type: 'string',
    desc: "文件路径 (本地路径)"
  },
  {
    name: 'size',
    type: 'number',
    desc: "本地文件大小，以字节为单位"
  },
  {
    name: 'createTime',
    type: 'number',
    desc: "文件保存时的时间戳，从1970/01/01 08:00:00 到当前时间的秒数"
  },
]
</script>
