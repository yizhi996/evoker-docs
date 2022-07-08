# nz.getUserInfo

> <Icon type="success" /> 支持 Promise

统一的获取用户信息接口，需要在 Native 自行实现，也可以不使用本接口，直接在 JS 端自行实现。

本接口只能在 @click 事件内调用，每次调用都会弹窗请求授权。

### 参数

<Props options />

### 成功返回

<Results :data="results" />

### Example

```vue
<template>
  <button @click="getUserInfo">获取用户信息</button>
</template>

<script setup lang="ts">
const getUserInfo = () => {
  const { userInfo } = await nz.getUserProfile()
  console.log(userInfo)
}
</script>
```

<script setup>
const results = [
  {
    name: 'userInfo',
    type: 'UserInfo',
    desc: "自定义的用户信息对象，在 Native 返回",
    version: '0.1.0',
  },
]
</script>
