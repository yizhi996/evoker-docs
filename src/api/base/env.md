# ek.env

环境变量。

### 属性

string USER_DATA_PATH

文件系统中的用户目录路径 (本地路径)

### Example

```ts
const path = ek.env.USER_DATA_PATH + '/test.png'
console.log(path) // nzfile://usr/test.png
```
