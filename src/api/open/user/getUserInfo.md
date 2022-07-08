# nz.getUserInfo

> <Icon type="success" /> 支持 Promise

> 需要用户授权 `scope.userInfo`。

统一的获取用户信息接口，需要在 Native 自行实现，也可以不使用本接口，直接在 JS 端自行实现。

::: tip
本接口只能在已经授权的情况下直接调用，未授权将返回错误。首次调用需要使用 [button](../../../component/button.md) 的 open-type 来弹窗获取授权和用户信息。一旦用户同意授权，之后使用 open-type 将不会弹窗。
:::

### 参数

<Props options />

### 成功返回

<Results :data="results" />

### Example

```vue
<template>
  <button open-type="getUserInfo" @getuserinfo="getUserInfo">获取用户信息</button>
</template>

<script setup lang="ts">
// 在已经授权的情况下可以直接获取用户信息，无需通过 open-type 的方式获取
nz.getSetting({
  success: async res => {
    if (res.authSetting['scope.userInfo']) {
      const { userInfo } = await nz.getUserInfo()
      console.log(userInfo)
    }
  }
})

// 通过 open-type 的方式授权并且获取用户信息
const getUserInfo = ev => {
  const { userInfo } = ev.detail
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
