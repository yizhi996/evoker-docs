# FileSystemManager.fstat

> 以 Promise 风格调用：不支持

获取文件的状态信息

### 参数

<Props :data="props" options />

### 成功返回

<Results :data="results" />

### Example

```ts
const fs = ek.getFileSystemManager()
const fd = fs.open({
  filePath: `${ek.env.USER_DATA_PATH}/hello.txt`,
  flag: 'a+',
  success: res => {
    fs.fstat({
      fd: res.fd,
      success(res) {
        console.log(res.stats)
      }
    })
  }
})
```

<script setup>
const props = [
    {
        name: "fd", 
        type: "string",
        default: "",
        required: true, 
        desc: `文件描述符。通过 <a href="./open">FileSystemManager.open</a> 接口获得`
    }
]

const results = [
  {
    name: 'stats',
    type: 'Stats',
    desc: "Stats 对象，包含了文件的状态信息"
  }
]
</script>
