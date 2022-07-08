# [InnerAudioContext](./../InnerAudioContext).pause

暂停，暂停后的音频再播放会从暂停处开始播放。

### Example

```ts
const ctx = nz.createInnerAudioContext()
ctx.src = 'https://example.com/test.mp3'
ctx.play()

setTimeout(() => {
  ctx.pause()
}, 2000)
```
