# [Animation](./../Animation).translateX

对 X 轴平移。

### 参数

**number translation**

在 X 轴平移的距离，单位为 px

### 返回值

**[Animation](./../Animation)**

### Example

```ts
const anim = ek.createAnimation()
const animData = anim
  .translateX(10)
  .step()
  .export()
```
