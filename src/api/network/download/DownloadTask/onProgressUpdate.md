# [DownloadTask](../DownloadTask.md).onProgressUpdate

监听下载进度变化事件。

### Result

<Results :data="results" />

### Example

```ts
const task = ek.downloadFile({
  url: 'https://example.com/file/test.png',
  success: res => {
    console.log(res.tempFilePath)
  },
  fail: res => {
    console.log(res.errMsg)
  }
})

task.onProgressUpdate(res => {
  console.log(`progress: ${res.progress}%`)
})
```

<script setup>
const results = [
  {
    name: 'progress',
    type: 'number',
    desc: '下载进度百分比, 0 - 100'
  },
  {
    name: 'totalBytesWritten',
    type: 'number',
    desc: '已经下载的数据长度，单位 Bytes'
  },
  {
    name: 'totalBytesExpectedToWrite',
    type: 'number',
    desc: '预期需要下载的数据总长度，单位 Bytes'
  },
]
</script>
