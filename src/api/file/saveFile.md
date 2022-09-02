# ek.saveFile

> <Icon type="success" /> 支持 Promise

保存文件到本地。注意：saveFile 会把临时文件移动，因此调用成功后传入的 tempFilePath 将不可用。

### 参数

<Props :data="props" options />

### 成功返回

<Results :data="results" />

### Example

```ts
const res = await ek.chooseImage({ count: 1 })
const tempFilePath = res.tempFilePaths[0]
const { savedFilePath } = await ek.saveFile({ tempFilePath })
console.log(savedFilePath)
```

<script setup>
const props = [
    {
        name: "tempFilePath", 
        type: "string",
        default: "",
        required: true, 
        desc: "需要保存的文件的临时路径 (本地路径)"
    }
]

const results = [
  {
    name: 'savedFilePath',
    type: 'string',
    desc: "存储后的文件路径 (本地路径)"
  },
]
</script>
