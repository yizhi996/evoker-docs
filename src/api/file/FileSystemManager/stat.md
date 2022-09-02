# FileSystemManager.stat

> 以 Promise 风格调用：不支持

获取文件 Stats 对象

### 参数

<Props :data="props" options />

### 成功返回

<Results :data="results" />

### Example

```ts
const fs = ek.getFileSystemManager()
fs.stat({
  path: `${ek.env.USER_DATA_PATH}/example`,
  success: res => {
    console.log(res.stats.isDirectory())
  },
  fail: err => {
    console.error(err)
  }
})
```

<script setup>
const props = [
    {
        name: "path", 
        type: "string",
        default: "",
        required: true, 
        desc: "文件/目录路径 (本地路径)"
    },
    {
        name: "recursive", 
        type: "boolean",
        default: "",
        required: false, 
        desc: `是否递归获取目录下的每个文件的 <a href="../Stats">Stats</a> 信息`
    }
]

const results = [
  {
    name: 'stats',
    type: 'Stats',
    desc: "当 recursive 为 false 时，res.stats 是一个 Stats 对象。当 recursive 为 true 且 path 是一个目录的路径时，res.stats 是一个 Array，数组的每一项是一个对象，每个对象包含 path 和 stats。"
  }
]
</script>
