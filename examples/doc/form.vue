<template>
  <div>
    <v-form :model="formValidate">
      <v-form-item label="用户名">
        <v-input v-model="formValidate.name"></v-input>
      </v-form-item>
      <v-form-item label="邮箱">
        <v-input v-model="formValidate.mail"></v-input>
      </v-form-item>
    </v-form>
  </div>
</template>

<script>
export default {
  data () {
    return {
      formValidate: {
        name: '',
        mail: ''
      }
    }
  }
}
</script>
