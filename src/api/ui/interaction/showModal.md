# ek.showModal

> <Icon type="success" /> 支持 Promise

显示模态对话框。

### 参数

<Props :data="props" options />

### 成功返回

<Results :data="results" />

### Example

```ts
ek.showModal({
  title: '是否删除',
  content: '删除后将无法找回照片'
})
```

<script setup>
const props = [
    {
        name: "title", 
        type: "string",
        default: "",
        required: false, 
        desc:"标题"
    },
    {
        name: "content", 
        type: "string",
        default: "",
        required: false, 
        desc:"内容",
    },
    {
        name: "showCancel", 
        type: "boolean",
        default: "true",
        required: false, 
        desc:"是否显示取消按钮"
    },
    {
        name: "cancelText", 
        type: "string",
        default: "取消",
        required: false, 
        desc:"取消按钮的文字",
    },
    {
        name: "cancelColor", 
        type: "string",
        default: "#000",
        required: false, 
        desc:"取消按钮的文字颜色，必须是 16 进制格式",
    },
    {
        name: "confirmText", 
        type: "string",
        default: "确定",
        required: false, 
        desc: "确认按钮的文字",
    },
    {
        name: "confirmColor", 
        type: "string",
        default: "#576B95",
        required: false, 
        desc: "确认按钮的文字颜色，必须是 16 进制格式",
    },
    {
        name: "editable", 
        type: "boolean",
        default: "",
        required: false, 
        desc: "是否显示输入框",
    },
    {
        name: "placeholderText", 
        type: "string",
        default: "",
        required: false, 
        desc: "显示输入框时的提示文本",
    },
]

const results = [
  {
    name: 'content',
    type: 'string',
    desc: 'editable 为 true 时，用户输入的文本'
  },
  {
    name: 'confirm',
    type: 'boolean',
    desc: '为 true 时，表示用户点击了确定按钮'
  },
  {
    name: 'cancel',
    type: 'boolean',
    desc: '为 true 时，表示用户点击了取消'
  },
]
</script>
