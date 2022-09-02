# [RecorderManager](./../RecorderManager).onStop

监听录音结束事件。

### 参数

**function callback**

录音结束事件的回调函数

#### 回调参数

Object

<Results :data="results" />

<script setup>
const results = [
  {
    name: 'tempFilePath',
    type: 'string',
    desc: '录音文件的临时路径 (本地路径)'
  },
  {
    name: 'duration',
    type: 'number',
    desc: '录音总时长，单位：ms'
  },
  {
    name: 'fileSize',
    type: 'number',
    desc: '录音文件大小，单位：Byte'
  },
]
</script>
