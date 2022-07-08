# ek.getRandomValues

> <Icon type="success" /> 支持 Promise

获取密码学安全随机数。

### 参数

<Props :data="props" options />

### 成功返回

<Results :data="results" />

### Example

```ts
const { randomValues } = await ek.getRandomValues({ length: 6 })
const base64 = ek.arrayBufferToBase64(randomValues)
```

<script setup>
const props = [
    {
        name: "length", 
        type: "number",
        default: "",
        required: true, 
        desc: "整数，生成随机数的字节数，最大 1048576", 
        version: "0.1.0"
    },
]

const results = [
  {
    name: 'randomValues',
    type: 'ArrayBuffer',
    desc: "随机数内容，长度为传入的字节数",
    version: '0.1.0',
  },
]
</script>
