# [InnerAudioContext](./../InnerAudioContext).stop

停止，停止后的音频再播放会从头开始播放。

### Example

```ts
const ctx = ek.createInnerAudioContext()
ctx.src = 'https://example.com/test.mp3'
ctx.play()

setTimeout(() => {
  ctx.stop()
}, 2000)
```
