## Input 输入框

### 基础用法 

输入框的基础用法

:::demo 通过`type`属性设置不同类型的输入框

```html
<template>
  <div>
    <v-input v-model="value"></v-input>
    <p>{{ value }}</p>
  </div>
</template>

<script>
export default {
  data () {
    return {
      value: '1'
    }
  }
}
</script>
```

:::

