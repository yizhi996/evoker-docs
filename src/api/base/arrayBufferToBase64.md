# nz.arrayBufferToBase64

将 ArrayBuffer 对象转成 Base64 字符串。

### 参数

**ArrayBuffer arrayBuffer**

要转换成 Base64 字符串的 ArrayBuffer 对象

### 返回值

**string**

Base64 字符串

### Example

```ts
const base64 = 'CxYh'
const arrayBuffer = nz.base64ToArrayBuffer(base64)

const _base64 = nz.arrayBufferToBase64(arrayBuffer)

console.log(base64 === _base64)
```
