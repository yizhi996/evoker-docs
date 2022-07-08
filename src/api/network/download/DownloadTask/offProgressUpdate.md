# [DownloadTask](../DownloadTask.md).offProgressUpdate

取消监听下载进度变化事件。

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

const onUpdate = res => {
  console.log(`progress: ${res.progress}%`)
}

task.onProgressUpdate(onUpdate)

// do some ...
task.offProgressUpdate(onUpdate)
```
