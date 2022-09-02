# [RecorderManager](./../RecorderManager).onError

监听录音错误事件。

### 参数

**function callback**

录音错误事件的回调函数

#### 回调参数

Object

<Results :data="results" />

<script setup>
const results = [
  {
    name: 'errMsg',
    type: 'string',
    desc: '错误信息'
  },
]
</script>
