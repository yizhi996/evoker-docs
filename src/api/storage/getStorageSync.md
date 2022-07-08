# ek.getStorageSync

从本地缓存中同步获取指定 key 的内容。

### 参数

**string key**

本地缓存中指定的 key

### 返回

**any**

key 对应的内容

### Example

```ts
const data = ek.getStorageSync('key_abc')
console.log(data)
```
