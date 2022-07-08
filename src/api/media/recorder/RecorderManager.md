# RecorderManager

全局唯一的录音管理器。

### 方法

**[RecorderManager.start()](./RecorderManager/start.md)**

开始录音

**[RecorderManager.pause()](./RecorderManager/pause.md)**

暂停录音

**[RecorderManager.resume()](./RecorderManager/resume.md)**

继续录音

**[RecorderManager.stop()](./RecorderManager/stop.md)**

停止录音

**[RecorderManager.onStart()](./RecorderManager/onStart.md)**

监听录音开始事件

**[RecorderManager.onResume()](./RecorderManager/onResume.md)**

监听录音继续事件

**[RecorderManager.onPause()](./RecorderManager/onPause.md)**

监听录音暂停事件

**[RecorderManager.onStop()](./RecorderManager/onStop.md)**

监听录音结束事件

**[RecorderManager.onError()](./RecorderManager/onError.md)**

监听录音错误事件

**[RecorderManager.onInterruptionBegin()](./RecorderManager/onInterruptionBegin.md)**

监听录音因为受到系统占用而被中断开始事件，录音会被暂停。pause 事件在此事件后触发

**[RecorderManager.onInterruptionEnd()](./RecorderManager/onInterruptionEnd.md)**

监听录音中断结束事件。在收到 interruptionBegin 事件之后，小程序内所有录音会暂停，收到此事件之后才可再次录音成功。

### Example

```ts
const mgr = nz.getRecorderManager()

mgr.onStart(() => {
  console.log('开始录制')
})

mgr.onStop(res => {
  console.log('完成录制', res.tempFilePath)
})

const play = () => {
  mgr.start()

  setTimeout(() => {
    mgr.stop()
  }, 100000)
}
```
