# camera

原生相机组件。

> 需要用户授权 `scope.camera`。

> 相关 api [nz.createCameraContext](../api/media/camera/createCameraContext)

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
import Props from '/@theme/components/Props.vue'
import Events from '/@theme/components/Events.vue'

const props = [
  {
    name: 'mode',
    type: 'string',
    default: 'normal',
    required: false,
    desc: '应用模式，只在初始化时有效，不能动态变更',
    version: '0.1.0',
    types: [
        { type: "normal", desc: "相机模式" },
        { type: "scanCode", desc: "扫码模式" },
    ]
  },
  {
    name: 'resolution',
    type: 'string',
    default: 'medium',
    required: false,
    desc: '分辨率，不支持动态修改',
    version: '0.1.0',
    types: [
        { type: "low", desc: "低" },
        { type: "medium", desc: "中" },
        { type: "high", desc: "高" },
    ]
  },
  {
    name: 'device-position',
    type: 'string',
    default: 'back',
    required: false,
    desc: '摄像头朝向',
    version: '0.1.0',
    types: [
        { type: "front", desc: "前置" },
        { type: "back", desc: "后置" },
    ]
  },
  {
    name: 'flash',
    type: 'string',
    default: 'auto',
    required: false,
    desc: '闪光灯',
    version: '0.1.0',
    types: [
        { type: "auto", desc: "自动" },
        { type: "on", desc: "打开" },
        { type: "off", desc: "关闭" },
        { type: "torch", desc: "常亮" },
    ]
  },
]

const events = [
    {
        name: "initdone", 
        desc: "相机初始化完成时触发", 
        event:"{ maxZoom: number }",
        version: "0.1.0"
    },
    {
        name: "stop", 
        desc: "摄像头在非正常终止时触发，如退出后台等情况", 
        event:"",
        version: "0.1.0"
    },
    {
        name: "error", 
        desc: "用户不允许使用摄像头时触发", 
        event:"",
        version: "0.1.0"
    },
    {
        name: "scancode", 
        desc: `在扫码识别成功时触发，仅在 mode="scanCode" 时生效`, 
        event:"{ value: string }",
        version: "0.1.0"
    },
]

</script>
