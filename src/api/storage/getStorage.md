# nz.getStorage

> <Icon type="success" /> 支持 Promise

从本地缓存中异步获取指定 key 的内容。

### 参数

<Props :data="props" options />

### 返回

<Results :data="results" />

### Example

```ts
const res = await nz.getStorage({ key: 'key_abc' })
console.log(res.data)
```

<script setup>
const props = [
    {
        name: "key", 
        type: "string",
        default: "",
        required: true, 
        desc: "本地缓存中指定的 key", 
        version: "0.1.0"
    },
]

const results = [
  {
    name: 'data',
    type: 'any',
    desc: 'key 对应的内容',
    version: '0.1.0',
  },
]
</script>
