# ek.getStorageInfoSync

同步获取当前 storage 的相关信息。

### 返回

<Results :data="results" />

### Example

```ts
const res = ek.getStorageInfoSync()
console.log(res.keys)
```

<script setup>
const results = [
  {
    name: 'keys',
    type: 'string[]',
    desc: '当前 storage 中所有的 key',
    version: '0.1.0',
  },
  {
    name: 'currentSize',
    type: 'number',
    desc: '当前占用的空间大小, 单位 KB',
    version: '0.1.0',
  },
  {
    name: 'limitSize',
    type: 'number',
    desc: '限制的空间大小，单位 KB',
    version: '0.1.0',
  },
]
</script>
