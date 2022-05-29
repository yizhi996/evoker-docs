# [RequestTask](../RequestTask.md).abort

中断请求任务。

### Example

```ts
const task = nz.request({
  url: 'https://example.com/api/test',
  success: res => {
    console.log('success')
  },
  fail: res => {
    console.log('abort')
  }
})
task.abort()
```
