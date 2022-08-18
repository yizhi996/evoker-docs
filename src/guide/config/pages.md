# pages

用于设置小程序的页面路由。

由 `(string | Page)[]` 组成。

## Page.path

- **类型：** `string`

页面的路径，不可以带参数。

## Page.style

页面的的状态栏、导航条、标题、窗口背景色。

## Page.style.navigationBarBackgroundColor

- **类型：** `HexColor`
- **默认：** 使用 [window.navigationBarBackgroundColor](./window.md#navigationbarbackgroundcolor)

导航栏背景颜色。

## Page.style.navigationBarTextStyle

- **类型：** `'white' | 'black'`
- **默认：** 使用 [window.navigationBarTextStyle](./window.md#navigationBarTextStyle)

导航栏标题颜色。

## Page.style.navigationBarTitleText

- **类型：** `string`
- **默认：** 使用 [window.navigationBarTitleText](./window.md#navigationBarTitleText)

导航栏标题。

## Page.style.navigationStyle

- **类型：** `'default' | 'custom'`
- **默认：** 使用 [window.navigationStyle](./window.md#navigationStyle)

导航栏样式。

当设置为 `custom` 时不显示导航栏，只保留右上角的胶囊按钮。

## Example

```json
{
  "pages": [
    "pages/Index",
    "pages/Me",
    {
      "path": "pages/Detail",
      "style": {
        "navigationBarTitleText": "Detail",
        "navigationBarTextStyle": "white",
        "navigationBarBackgroundColor": "#1989fa"
      }
    }
  ]
}
```
