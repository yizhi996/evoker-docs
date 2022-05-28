# [Animation](./../Animation).scale

缩放。

### 参数

**number sx**

当仅有 sx 参数时，表示在 X 轴、Y 轴同时缩放 sx 倍数

**number sy**

在 Y 轴缩放 sy 倍数

### 返回值

**[Animation](./../Animation)**

### Example

```ts
const anim = nz.createAnimation()
const animData = anim
  .scale(2.0)
  .step()
  .export()
```
