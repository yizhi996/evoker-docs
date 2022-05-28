# [Animation](./../Animation).matrix3d

3D 变换矩阵。

同 [transform-function matrix3d](https://developer.mozilla.org/zh-CN/docs/Web/CSS/transform-function/matrix3d)

### 返回值

**[Animation](./../Animation)**

### Example

```ts
const anim = nz.createAnimation()
const animData = anim
  .matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 50, 100, 0, 1.1)
  .step()
  .export()
```
