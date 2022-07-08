# [UploadTask](../UploadTask.md).offProgressUpdate

取消监听上传进度变化事件。

### Example

```ts
const task = ek.uploadFile({
  url: 'https://example.com/upload',
  // ...
  success: res => {
    console.log('success')
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
