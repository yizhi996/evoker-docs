# [Animation](./../Animation).translateY

对 Y 轴平移。

### 参数

**number translation**

在 Y 轴平移的距离，单位为 px

### 返回值

**[Animation](./../Animation)**

### Example

```ts
const anim = nz.createAnimation()
const animData = anim
  .translateY(10)
  .step()
  .export()
```
