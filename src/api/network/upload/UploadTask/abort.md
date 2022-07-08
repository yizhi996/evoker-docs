# [UploadTask](../UploadTask.md).abort

中断上传任务。

### Example

```ts
const task = ek.uploadFile({
  url: 'https://example.com/upload',
  // ...
  success: res => {
    console.log('success')
  },
  fail: res => {
    console.log('abort')
  }
})
task.abort()
```
