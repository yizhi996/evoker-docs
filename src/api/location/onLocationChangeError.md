# ek.onLocationChangeError

监听持续定位接口返回失败事件。

### 参数

**function callback**

持续定位接口返回失败事件的回调函数

#### 回调参数

Object

<Results :data="results" />

<script setup>
const results = [
  {
    name: 'errMsg',
    type: 'string',
    desc: "错误信息"
  },
]
</script>
