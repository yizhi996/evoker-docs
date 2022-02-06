# text

对应 HTML 中的`span`。

**强烈建议**：如果不需要使用 user-select 功能可以直接使用`span`编写 Vue 模板，来获得更好的渲染性能（会直接创建 dom ，而不是使用 Vue 的`createVNode`来创建）。
