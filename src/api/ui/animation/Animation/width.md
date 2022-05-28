# [Animation](./../Animation).width

设置宽度。

### 参数

**number | string value**

长度值，如果传入 number 则默认使用 px

### 返回值

**[Animation](./../Animation)**

### Example

```ts
const anim = nz.createAnimation()
const animData = anim
  .width('20px')
  .step()
  .export()
```
