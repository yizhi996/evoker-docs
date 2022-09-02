# FileSystemManager.saveFile

> 以 Promise 风格调用：不支持

保存临时文件到本地。此接口会移动临时文件，因此调用成功后，tempFilePath 将不可用

### 参数

<Props :data="props" options />

### 成功返回

<Results :data="results" />

### Example

```ts
const res = await ek.chooseImage({ count: 1 })
const tempFilePath = res.tempFilePaths[0]

const fs = ek.getFileSystemManager()
const { savedFilePath } = await fs.saveFile({ tempFilePath })
console.log(savedFilePath)
```

<script setup>
const props = [
    {
        name: "tempFilePath", 
        type: "string",
        default: "",
        required: true, 
        desc: "临时存储文件路径 (本地路径)"
    },
    {
        name: "filePath", 
        type: "string",
        default: "",
        required: false, 
        desc: "要存储的文件路径 (本地路径)"
    }
]

const results = [
  {
    name: 'savedFilePath',
    type: 'string',
    desc: "存储后的文件路径 (本地路径)"
  }
]
</script>
