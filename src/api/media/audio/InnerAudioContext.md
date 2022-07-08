# InnerAudioContext

InnerAudioContext 实例，可通过 [ek.createInnerAudioContext](./createInnerAudioContext.md) 接口获取实例。

::: tip
音频播放过程中，可能被系统中断，可通过 ek.onAudioInterruptionBegin、ek.onAudioInterruptionEnd 事件来处理。
:::

### 属性

**string src**

音频资源的地址

**number startTime**

开始播放的位置（单位：s），默认为 0

**boolean autoplay**

是否自动开始播放，默认为 false

**boolean loop**

是否循环播放，默认为 false

**number volume**

音量。范围 0~1。默认为 1

**number playbackRate**

播放速度。范围 0.5-2.0，默认为 1。

**number duration**

当前音频的长度（单位 s）。只有在当前有合法的 src 时返回（只读）

**number currentTime**

当前音频的播放位置（单位 s）。只有在当前有合法的 src 时返回（只读）

**boolean paused**

当前是是否暂停或停止状态（只读）

**number buffered**

音频缓冲的时间点，仅保证当前播放时间点到此时间点内容已缓冲（只读）

### 方法

**[InnerAudioContext.play()](./InnerAudioContext/play.md)**

播放

**[InnerAudioContext.pause()](./InnerAudioContext/pause.md)**

暂停，暂停后的音频再播放会从暂停处开始播放

**[InnerAudioContext.stop()](./InnerAudioContext/stop.md)**

停止，停止后的音频再播放会从头开始播放

**[InnerAudioContext.seek()](./InnerAudioContext/seek.md)**

跳转到指定位置

**[InnerAudioContext.destroy()](./InnerAudioContext/destroy.md)**

销毁当前实例

**[InnerAudioContext.onCanplay()](./InnerAudioContext/onCanplay.md)**

监听音频进入可以播放状态的事件。但不保证后面可以流畅播放

**[InnerAudioContext.offCanplay()](./InnerAudioContext/offCanplay.md)**

取消监听音频进入可以播放状态的事件

**[InnerAudioContext.onPlay()](./InnerAudioContext/onPlay.md)**

监听音频播放事件

**[InnerAudioContext.offPlay()](./InnerAudioContext/offPlay.md)**

取消监听音频播放事件

**[InnerAudioContext.onPause()](./InnerAudioContext/onPause.md)**

监听音频暂停事件

**[InnerAudioContext.offPause()](./InnerAudioContext/offPause.md)**

取消监听音频暂停事件

**[InnerAudioContext.onStop()](./InnerAudioContext/onStop.md)**

监听音频停止事件

**[InnerAudioContext.offStop()](./InnerAudioContext/offStop.md)**

取消监听音频停止事件

**[InnerAudioContext.onEnded()](./InnerAudioContext/onEnded.md)**

监听音频自然播放至结束的事件

**[InnerAudioContext.offEnded()](./InnerAudioContext/offEnded.md)**

取消监听音频自然播放至结束的事件

**[InnerAudioContext.onTimeUpdate()](./InnerAudioContext/onTimeUpdate.md)**

监听音频播放进度更新事件

**[InnerAudioContext.offTimeUpdate()](./InnerAudioContext/offTimeUpdate.md)**

取消监听音频播放进度更新事件

**[InnerAudioContext.onError()](./InnerAudioContext/onError.md)**

监听音频播放错误事件

**[InnerAudioContext.offError()](./InnerAudioContext/offError.md)**

取消监听音频播放错误事件

**[InnerAudioContext.onWaiting()](./InnerAudioContext/onWaiting.md)**

监听音频加载中事件。当音频因为数据不足，需要停下来加载时会触发

**[InnerAudioContext.offWaiting()](./InnerAudioContext/offWaiting.md)**

取消监听音频加载中事件

**[InnerAudioContext.onSeeking()](./InnerAudioContext/onSeeking.md)**

监听音频进行跳转操作的事件

**[InnerAudioContext.offSeeking()](./InnerAudioContext/offSeeking.md)**

取消监听音频进行跳转操作的事件

**[InnerAudioContext.onSeeked()](./InnerAudioContext/onSeeked.md)**

监听音频完成跳转操作的事件

**[InnerAudioContext.offSeeked()](./InnerAudioContext/offSeeked.md)**

取消监听音频完成跳转操作的事件

### Example

```vue
<template>
  <button @click="play">Play</button>
  <button @click="pause">Pause</button>
  <div>{{ info.currentTime }} / {{ info.duration }}</div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'

const info = reactive({
  currentTime: 0,
  duration: 0
})

const ctx = ek.createInnerAudioContext()
ctx.src = 'https://example.com/music.mp3'
ctx.volume = 0.5
ctx.autoplay = false
ctx.loop = false

ctx.onCanplay(() => {
  info.duration = ctx.duration
})

ctx.onPlay(() => {
  console.log('开始播放')
})

ctx.onTimeUpdate(() => {
  info.currentTime = ctx.currentTime
})

const play = () => {
  ctx.play()
}

const pause = () => {
  ctx.pause()
}
</script>
```
