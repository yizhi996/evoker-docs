# [Animation](./../Animation).rotate

从原点顺时针旋转一个角度。

### 参数

**number angle**

旋转的角度。范围 [-180, 180]

### 返回值

**[Animation](./../Animation)**

### Example

```ts
const anim = ek.createAnimation()
const animData = anim
  .rotate(45)
  .step()
  .export()
```
