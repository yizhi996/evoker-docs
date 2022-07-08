# [Animation](./../Animation).bottom

设置 bottom 值。

### 参数

**number | string value**

长度值，如果传入 number 则默认使用 px

### 返回值

**[Animation](./../Animation)**

### Example

```ts
const anim = ek.createAnimation()
const animData = anim
  .bottom('20px')
  .step()
  .export()
```
