# [Animation](./../Animation).translate

平移变换。

### 参数

**number tx**

当仅有该参数时表示在 X 轴偏移 tx，单位 px

**number ty**

在 Y 轴平移的距离，单位为 px

### 返回值

**[Animation](./../Animation)**

### Example

```ts
const anim = nz.createAnimation()
const animData = anim
  .translate(10, 10)
  .step()
  .export()
```
