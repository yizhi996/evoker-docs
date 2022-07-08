# [Animation](./../Animation).skewX

对 X 轴坐标进行倾斜。

### 参数

**number angle**

倾斜的角度，范围 [-180, 180]

### 返回值

**[Animation](./../Animation)**

### Example

```ts
const anim = ek.createAnimation()
const animData = anim
  .skewX(10)
  .step()
  .export()
```
