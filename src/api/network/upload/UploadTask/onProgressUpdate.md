# [UploadTask](../UploadTask.md).onProgressUpdate

监听上传进度变化事件。

### Result

<Results :data="results" />

### Example

```ts
const task = nz.uploadFile({
  url: 'https://example.com/upload',
  // ...
  success: res => {
    console.log('success')
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
    desc: '上传进度百分比, 0 - 100',
    version: '0.1.0',
  },
  {
    name: 'totalBytesWritten',
    type: 'number',
    desc: '已经上传的数据长度，单位 Bytes',
    version: '0.1.0',
  },
  {
    name: 'totalBytesExpectedToWrite',
    type: 'number',
    desc: '预期需要上传的数据总长度，单位 Bytes',
    version: '0.1.0',
  },
]
</script>
