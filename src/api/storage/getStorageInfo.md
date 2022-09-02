# ek.getStorageInfo

> <Icon type="success" /> 支持 Promise

异步获取当前 storage 的相关信息。

### 参数

<Props options />

### 返回

<Results :data="results" />

### Example

```ts
const res = await ek.getStorageInfo()
console.log(res.keys)
```

<script setup>
const results = [
  {
    name: 'keys',
    type: 'string[]',
    desc: '当前 storage 中所有的 key'
  },
  {
    name: 'currentSize',
    type: 'number',
    desc: '当前占用的空间大小, 单位 KB'
  },
  {
    name: 'limitSize',
    type: 'number',
    desc: '限制的空间大小，单位 KB'
  },
]
</script>
