# [Animation](./../Animation).rotate3d

从 固定 轴顺时针旋转一个角度。

### 参数

**number x**

旋转轴的 x 坐标

**number y**

旋转轴的 y 坐标

**number z**

旋转轴的 z 坐标

**number angle**

旋转的角度。范围 [-180, 180]

### 返回值

**[Animation](./../Animation)**

### Example

```ts
const anim = nz.createAnimation()
const animData = anim
  .rotate3d(10, 10, 0, 45)
  .step()
  .export()
```
