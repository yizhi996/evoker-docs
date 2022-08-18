# ek.setStorageSync

将数据存储在本地缓存中指定的 key 中，会覆盖掉原来该 key 对应的内容。除非用户主动删除或因存储空间原因被系统清理，否则数据都一直可用。单个 key 允许存储的最大数据长度为 1MB，所有数据存储上限为 10MB。

### 参数

**string key**

本地缓存中指定的 key

**any data**

需要存储的内容。只支持原生类型、Date、及能够通过 JSON.stringify 序列化的对象

### Example

```ts
try {
  ek.setStorageSync('key', 'value')
} catch (e) {
  console.log(e)
}
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
    {
        name: "data", 
        type: "any",
        default: "",
        required: true, 
        desc: "需要存储的内容。只支持原生类型、Date、及能够通过 JSON.stringify 序列化的对象"
    },
]
</script>
