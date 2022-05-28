# [Animation](./../Animation).translate3d

对 x, y, z 坐标进行平移变换。

### 参数

**number tx**

在 X 轴平移的距离，单位为 px

**number ty**

在 Y 轴平移的距离，单位为 px

**number tz**

在 Z 轴平移的距离，单位为 px

### 返回值

**[Animation](./../Animation)**

### Example

```ts
const anim = nz.createAnimation()
const animData = anim
  .translate3d(10, 10, 0)
  .step()
  .export()
```
