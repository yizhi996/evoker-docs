# ek.saveImageToPhotosAlbum

> <Icon type="success" /> 支持 Promise

> 需要用户授权 `scope.writePhotosAlbum`。

保存图片到系统相册。

### 参数

<Props :data="props" options />

### Example

```ts
const res = await ek.chooseImage({
  count: 1,
  sourceType: ['camera']
})
ek.saveImageToPhotosAlbum({
  filePath: res.tempFilePaths[0]
})
```

<script setup>
const props = [
    {
        name: "filePath", 
        type: "string",
        default: "",
        required: true, 
        desc: "图片文件路径，可以是临时文件路径或永久文件路径 (本地路径)，不支持网络路径"
    },
]
</script>
