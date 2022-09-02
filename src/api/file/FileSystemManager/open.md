# FileSystemManager.open

> 以 Promise 风格调用：不支持

打开文件，返回文件描述符

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
    console.log(res.fd)
  }
})
```

<script setup>
const props = [
    {
        name: "filePath", 
        type: "string",
        default: "",
        required: true, 
        desc: "文件路径 (本地路径)"
    },
    {
        name: "flag", 
        type: "string",
        default: "r",
        required: false, 
        desc: "文件系统标志，默认值: 'r'",
        values: [
          { value: "a", desc: "打开文件用于追加。 如果文件不存在，则创建该文件" },
          { value: "ax", desc: "类似于 'a'，但如果路径存在，则失败" },
          { value: "a+", desc: "打开文件用于读取和追加。 如果文件不存在，则创建该文件" },
          { value: "ax+", desc: "类似于 'a+'，但如果路径存在，则失败" },
          { value: "as", desc: "打开文件用于追加（在同步模式中）。 如果文件不存在，则创建该文件" },
          { value: "as+", desc: "打开文件用于读取和追加（在同步模式中）。 如果文件不存在，则创建该文件" },
          { value: "r", desc: "打开文件用于读取。 如果文件不存在，则会发生异常" },
          { value: "r+", desc: "打开文件用于读取和写入。 如果文件不存在，则会发生异常" },
          { value: "w", desc: "打开文件用于写入。 如果文件不存在则创建文件，如果文件存在则截断文件" },
          { value: "wx", desc: "类似于 'w'，但如果路径存在，则失败" },
          { value: "w+", desc: "打开文件用于读取和写入。 如果文件不存在则创建文件，如果文件存在则截断文件" },
          { value: "wx+", desc: "类似于 'w+'，但如果路径存在，则失败" },
        ]
    }
]

const results = [
  {
    name: 'fd',
    type: 'string',
    desc: "文件描述符"
  }
]
</script>
