## Form 表单

### 基础用法 

表单的基础用法

:::demo 点开就知道咋用了

```html
<template>
  <div>
    <v-form
      ref="form"
      :model="formValidate"
      :rules="ruleValidate"
      :label-width="60">
      <v-form-item label="用户名" prop="name">
        <v-input v-model="formValidate.name"></v-input>
      </v-form-item>
      <v-form-item label="邮箱" prop="mail">
        <v-input v-model="formValidate.mail"></v-input>
      </v-form-item>
    </v-form>
    <button @click="handleSubmit">提交</button>
    <button @click="handleReset">重置</button>
    <p style="margin-top: 20px;">{{ formValidate }}</p>
  </div>
</template>

<script>
export default {
  data () {
    return {
      formValidate: {
        name: '',
        mail: ''
      },
      ruleValidate: {
        name: [
          { required: true, message: '用户名不能为空', trigger: 'change' },
          { required: true, message: '用户名不能为空', trigger: 'blur' }
        ],
        mail: [
          { required: true, message: '邮箱不能为空', trigger: 'change' },
          { required: true, message: '邮箱不能为空', trigger: 'blur' },
          { type: 'email', message: '邮箱格式不正确', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    handleSubmit () {
      this.$refs.form.validate(valid => {
        if (valid) {
          window.alert('提交成功')
        } else {
          window.alert('表单验证失败')
        }
      })
    },
    handleReset () {
      this.$refs.form.resetField()
    }
  }
}
</script>

```