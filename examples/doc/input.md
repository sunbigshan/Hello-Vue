## Button 按钮

常用的操作按钮

### 基础用法 

按钮的基础用法

:::demo 通过`type`、`width`属性设置不同类型的按钮

```html
<template>
    <div>
        <button>默认按钮</button>
        <button type="success">成功按钮</button>
        <button type="warning">警告按钮</button>
        <button type="danger">危险按钮</button>
    </div>
    <div>
        <button width="100px">默认按钮</button>
        <button type="success" width="100px">成功按钮</button>
        <button type="warning" width="100px">警告按钮</button>
        <button type="danger" width="100px">危险按钮</button>
    </div>
</template>
```

:::

### Attributes
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|--------|--------   |---------- |-------------  |-------- |
| type   | 类型      | string    |   success / warning / danger / |—    |
| name   | name属性  | string    | — | —   |
| id     | id属性    | string    | — | —   |
| width  | 按钮宽度   | string    | — | 100%   |
