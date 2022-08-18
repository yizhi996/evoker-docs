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
  <input v-model:value="text" placeholder="请输入账号" focus />
</template>

<script setup lang="ts">
import { ref } from 'vue'

const text = ref('Evoker')
</script>
```

<script setup>
const props = [
    {
        name: "value", 
        type: "string",
        default: "",
        required: true, 
        desc:"输入框的初始内容（支持 v-model:value）"
    },
    {
        name: "type", 
        type: `string`,
        default: "text",
        required: false, 
        desc:"键盘类型",
        values: [
            { value: "text", desc: "文本输入键盘" },
            { value: "number", desc: "数字输入键盘" },
            { value: "digit", desc: "带小数点的数字键盘" },
        ]
    },
    {
        name: "password", 
        type:"boolean",
        default: "false",
        required: false, 
        desc:"是否是密码输入"
    },
    {
        name: "placeholder", 
        type:"string",
        default: "",
        required: false, 
        desc:"输入框为空时占位符"
    },
    {
        name: "placeholder-class", 
        type:"string",
        default: "",
        required: false, 
        desc:"指定 placeholder 的样式类"
    },
    {
        name: "placeholder-style", 
        type:"string",
        default: "",
        required: false, 
        desc:"指定 placeholder 的样式"
    },
    {
        name: "disabled", 
        type:"boolean",
        default: "false",
        required: false, 
        desc:"是否禁用输入框"
    },
    {
        name: "maxlength", 
        type:"number",
        default: "140",
        required: false, 
        desc:"最大输入长度，设置为 <= 0 的时候不限制最大长度"
    },
    {
        name: "cursor-spacing", 
        type:"number",
        default: "0",
        required: false, 
        desc:"指定光标与键盘的距离，取 input 距离底部的距离和 cursor-spacing 指定的距离的最小值作为光标与键盘的距离"
    },
    {
        name: "focus", 
        type:"boolean",
        default: "false",
        required: false, 
        desc:"获取焦点"
    },
    {
        name: "confirm-type", 
        type:`'send' | 'search' | 'next' | 'go' | 'done'`,
        default: "done",
        required: false, 
        desc:"设置键盘右下角按钮的文字，仅在type='text'时生效",
        values: [
            { value: "send", desc: "发送" },
            { value: "search", desc: "搜索" },
            { value: "next", desc: "下一个" },
            { value: "go", desc: "前往" },
            { value: "done", desc: "完成" },
        ]
    },
    {
        name: "confirm-hold", 
        type:"boolean",
        default: "false",
        required: false, 
        desc:"点击键盘右下角按钮时是否保持键盘不收起"
    },
    {
        name: "cursor", 
        type:"number",
        default: "false",
        required: false, 
        desc:"指定 focus 时的光标位置"
    },
    {
        name: "selection-start", 
        type:"number",
        default: "-1",
        required: false, 
        desc:"光标起始位置，自动聚集时有效，需与 selection-end 搭配使用"
    },
    {
        name: "selection-end", 
        type:"number",
        default: "-1",
        required: false, 
        desc:"光标结束位置，自动聚集时有效，需与 selection-start 搭配使用"
    },
    {
        name: "adjust-position", 
        type:"boolean",
        default: "true",
        required: false, 
        desc:"键盘弹起时，如果输入框被键盘遮盖，是否自动上推页面"
    },
    {
        name: "hold-keyboard", 
        type:"boolean",
        default: "true",
        required: false, 
        desc:"focus时，点击页面的时候不收起键盘"
    },
]

const events = [
    {
        name: "input", 
        desc: "输入的值发生变化时触发", 
        event:"{ value: string }"
    },
    {
        name: "focus", 
        desc: "输入框成为焦点时触发", 
        event:"{ value: string }"
    },
    {
        name: "blur", 
        desc: "输入框失去焦点时触发", 
        event:"{ value: string }"
    },
    {
        name: "confirm", 
        desc: "点击完成按钮时触发", 
        event:"{ value: string }"
    },
    {
        name: "keyboard-height-change", 
        desc: "键盘高度发生变化的时候触发", 
        event:"{ height: number, duration: number }"
    },
]
</script>
