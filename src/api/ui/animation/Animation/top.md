# [Animation](./../Animation).top

设置 top 值。

### 参数

**number | string value**

长度值，如果传入 number 则默认使用 px

### 返回值

**[Animation](./../Animation)**

### Example

```ts
const anim = ek.createAnimation()
const animData = anim
  .top('20px')
  .step()
  .export()
```
