# [Animation](./../Animation).skewY

对 Y 轴坐标进行倾斜。

### 参数

**number angle**

倾斜的角度，范围 [-180, 180]

### 返回值

**[Animation](./../Animation)**

### Example

```ts
const anim = nz.createAnimation()
const animData = anim
  .skewY(10)
  .step()
  .export()
```
