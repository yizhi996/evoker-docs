# [InnerAudioContext](./../InnerAudioContext).seek

跳转到指定位置。

### 参数

**number position**

跳转的时间，单位秒

### Example

```ts
const ctx = nz.createInnerAudioContext()
ctx.src = 'https://example.com/test.mp3'
ctx.play()

setTimeout(() => {
  ctx.seek(10) // 10 seconds
}, 2000)
```
