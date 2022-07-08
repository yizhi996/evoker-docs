# [InnerAudioContext](./../InnerAudioContext).destroy

销毁当前实例。

### Example

```ts
const ctx = nz.createInnerAudioContext()
ctx.src = 'https://example.com/test.mp3'
ctx.play()

setTimeout(() => {
  ctx.destroy()
}, 2000)
```
