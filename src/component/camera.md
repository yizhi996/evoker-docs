# camera

原生相机组件。

> 需要用户授权 `scope.camera`。

> 相关 api [ek.createCameraContext](../api/media/camera/createCameraContext)

### Props

<Props :data="props" />

### Events

<Events :data="events" />

### Tips

- 一个页面只能存在一个 camera 组件。

### Example

```vue
<template>
  <camera class="w-full h-80" resolution="high" flash="off"></camera>
</template>
```

<script setup>
const props = [
  {
    name: 'mode',
    type: 'string',
    default: 'normal',
    required: false,
    desc: '应用模式，只在初始化时有效，不能动态变更',
    version: '0.1.0',
    values: [
        { value: "normal", desc: "相机模式" },
        { value: "scanCode", desc: "扫码模式" },
    ]
  },
  {
    name: 'resolution',
    type: 'string',
    default: 'medium',
    required: false,
    desc: '分辨率，不支持动态修改',
    version: '0.1.0',
    values: [
        { value: "low", desc: "低" },
        { value: "medium", desc: "中" },
        { value: "high", desc: "高" },
    ]
  },
  {
    name: 'device-position',
    type: 'string',
    default: 'back',
    required: false,
    desc: '摄像头朝向',
    version: '0.1.0',
    values: [
        { value: "front", desc: "前置" },
        { value: "back", desc: "后置" },
    ]
  },
  {
    name: 'flash',
    type: 'string',
    default: 'auto',
    required: false,
    desc: '闪光灯',
    version: '0.1.0',
    values: [
        { value: "auto", desc: "自动" },
        { value: "on", desc: "打开" },
        { value: "off", desc: "关闭" },
        { value: "torch", desc: "常亮" },
    ]
  },
]

const events = [
    {
        name: "initdone", 
        desc: "相机初始化完成时触发", 
        event:"{ maxZoom: number }"
    },
    {
        name: "stop", 
        desc: "摄像头在非正常终止时触发，如退出后台等情况", 
        event:""
    },
    {
        name: "error", 
        desc: "用户不允许使用摄像头时触发", 
        event:""
    },
    {
        name: "scancode", 
        desc: `在扫码识别成功时触发，仅在 mode="scanCode" 时生效`, 
        event:"{ value: string }"
    },
]
</script>
