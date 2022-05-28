# [Animation](./../Animation).rotateZ

从 Z 轴顺时针旋转一个角度。

### 参数

**number angle**

旋转的角度。范围 [-180, 180]

### 返回值

**[Animation](./../Animation)**

### Example

```ts
const anim = nz.createAnimation()
const animData = anim
  .rotateZ(45)
  .step()
  .export()
```
