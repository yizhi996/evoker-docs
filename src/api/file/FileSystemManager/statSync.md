# FileSystemManager.statSync

[FileSystemManager.stat](./stat.md) 的同步方法

### 参数

**string path**

文件/目录路径 (本地路径)

**boolean recursive**

是否递归获取目录下的每个文件的 [Stats](../Stats.md) 信息

### 返回值

**[Stats](../Stats.md) | {path: string, stats: [Stats](../Stats.md)}[] stats**

当 recursive 为 false 时，res.stats 是一个 Stats 对象。当 recursive 为 true 且 path 是一个目录的路径时，res.stats 是一个 Array，数组的每一项是一个对象，每个对象包含 path 和 stats。

### Example

```ts
const fs = ek.getFileSystemManager()
try {
  const stats = fs.statSync(`${ek.env.USER_DATA_PATH}/example`)
  console.log(stats)
} catch (e) {
  console.log(e)
}
```
