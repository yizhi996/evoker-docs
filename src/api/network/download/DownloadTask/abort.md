# [DownloadTask](../DownloadTask.md).abort

中断下载任务。

### Example

```ts
const task = ek.downloadFile({
  url: 'https://example.com/file/test.png',
  success: res => {
    console.log(res.tempFilePath)
  },
  fail: res => {
    console.log('abort')
  }
})
task.abort()
```
