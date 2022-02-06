<script setup>
import Props from '/@theme/components/Props.vue'
import Events from '/@theme/components/Events.vue'

const props = [
    {
        name: "v-model", 
        type: "string",
        default: "",
        required: true, 
        desc:"输入的内容", 
        version: "0.1.0"
    },
    {
        name: "type", 
        type: `'text' | 'number' | 'digit'`,
        default: "text",
        required: false, 
        desc:"input 类型 text：文本输入键盘，number：数字输入键盘，digit：带小数点的数字键盘", 
        version: "0.1.0"
    },
    {
        name: "password", 
        type:"boolean",
        default: "false",
        required: false, 
        desc:"是否是密码输入", 
        version: "0.1.0"
    },
    {
        name: "focus", 
        type:"boolean",
        default: "false",
        required: false, 
        desc:"获取焦点", 
        version: "0.1.0"
    },
    {
        name: "placeholder", 
        type:"string",
        default: "",
        required: false, 
        desc:"输入框为空时占位符", 
        version: "0.1.0"
    },
    {
        name: "placeholder-class", 
        type:"string",
        default: "input-placeholder",
        required: false, 
        desc:"指定 placeholder 的样式类", 
        version: "0.1.0"
    },
    {
        name: "placeholder-style", 
        type:"string",
        default: "",
        required: false, 
        desc:"指定 placeholder 的样式类", 
        version: "0.1.0"
    },
    {
        name: "disabled", 
        type:"boolean",
        default: "false",
        required: false, 
        desc:"是否禁用输入框", 
        version: "0.1.0"
    },
    {
        name: "maxlength", 
        type:"number",
        default: "140",
        required: false, 
        desc:"最大输入长度，设置为 <= 0 的时候不限制最大长度", 
        version: "0.1.0"
    },
    {
        name: "adjust-position", 
        type:"boolean",
        default: "true",
        required: false, 
        desc:"键盘弹起时，如果输入框被键盘遮盖，是否自动上推页面", 
        version: "0.1.0"
    },
    {
        name: "confirm-type", 
        type:`'send' | 'search' | 'next' | 'go' | 'done'`,
        default: "done",
        required: false, 
        desc:"设置键盘右下角按钮的文字，仅在type='text'时生效，具体情况视输入法如何实现", 
        version: "0.1.0"
    },
]

const events = [
    {
        name: "input", 
        desc: "输入的值发生变化时触发", 
        event:"value: string",
        version: "0.1.0"
    },
    {
        name: "focus", 
        desc: "输入框成为焦点时触发", 
        event:"value: string",
        version: "0.1.0"
    },
    {
        name: "blur", 
        desc: "输入框失去焦点时触发", 
        event:"value: string",
        version: "0.1.0"
    },
    {
        name: "confirm", 
        desc: "点击完成按钮时触发", 
        event:"value: string",
        version: "0.1.0"
    },
    {
        name: "keyboard-height-change", 
        desc: "键盘高度发生变化的时候触发", 
        event:"{ height: number, duration: number }",
        version: "0.1.0"
    },
]
</script>

# input

输入框。

[原生组件](./natively)，使用时请注意相关限制。

### Props

<Props :data="props" />

### Events

<Events :data="events" />

### Example

```vue
<template>
  <input v-model="value1" placeholder="请输入账号" />
</template>

<script setup lang="ts">
import { ref } from 'vue'

const value1 = ref('')
</script>
```
