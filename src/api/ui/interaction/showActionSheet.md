# nz.showActionSheet

> <Icon type="success" /> 支持 Promise

显示操作菜单。

### 参数

<Props :data="props" options />

### 成功返回

<Results :data="results" />

### Example

```ts
try {
  const itemList = ['男', '女', '其他']
  const res = await nz.showActionSheet({ itemList })
  console.log('selected: ' + itemList[res.tapIndex])
} catch {
  console.log('cancel')
}
```

<script setup>
const props = [
    {
        name: "alertText", 
        type: "string",
        default: "",
        required: false, 
        desc:"警示文案", 
        version: "0.1.0"
    },
    {
        name: "itemList", 
        type: "string[]",
        default: "",
        required: true, 
        desc:"按钮的文字数组，数组长度最大为 6", 
        version: "0.1.0",
    },
    {
        name: "itemColor", 
        type: "string",
        default: "#000",
        required: false, 
        desc:"按钮的文字颜色，必须是 16 进制格式", 
        version: "0.1.0"
    },
]

const results = [
  {
    name: 'tapIndex',
    type: 'number',
    desc: '用户点击的按钮序号，从上到下的顺序，从0开始',
    version: '0.1.0',
  },
]
</script>
