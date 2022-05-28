# [Animation](./../Animation).matrix

2D 变换矩阵。

同 [transform-function matrix](https://developer.mozilla.org/zh-CN/docs/Web/CSS/transform-function/matrix)

### 返回值

**[Animation](./../Animation)**

### Example

```ts
const anim = nz.createAnimation()
const animData = anim
  .matrix(1, 2, -1, 1, 80, 80)
  .step()
  .export()
```
