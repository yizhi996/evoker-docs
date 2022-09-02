# ek.removeSavedFile

> <Icon type="success" /> 支持 Promise

删除本地缓存文件。

### 参数

<Props :data="props" options />

### Example

```ts
const { fileList } = await ek.getSavedFileList()
if (fileList.length > 0) {
  ek.removeSavedFile({
    filePath: fileList[0].filePath
  })
}
```

<script setup>
const props = [
    {
        name: "filePath", 
        type: "string",
        default: "",
        required: true, 
        desc: "需要删除的文件路径 (本地路径)"
    }
]
</script>
