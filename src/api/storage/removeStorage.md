# ek.removeStorage

> <Icon type="success" /> 支持 Promise

从本地缓存中移除指定 key。

### 参数

<Props :data="props" options />

### Example

```ts
ek.removeStorage({
  key: 'key_abc',
  success: () => {
    console.log('ok')
  }
})
```

<script setup>
const props = [
    {
        name: "key", 
        type: "string",
        default: "",
        required: true, 
        desc: "本地缓存中指定的 key"
    },
]
</script>
