<template>
  <div>
    <v-form :model="formValidate" :rules="ruleValidate" :label-width="60">
      <v-form-item label="用户名" prop="name">
        <v-input v-model="formValidate.name"></v-input>
      </v-form-item>
      <v-form-item label="邮箱" prop="mail">
        <v-input v-model="formValidate.mail"></v-input>
      </v-form-item>
    </v-form>
    <p>{{ formValidate }}</p>
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
  }
}
</script>
