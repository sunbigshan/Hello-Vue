<template>
  <form class="v-form">
    <slot></slot>
  </form>
</template>

<script>
export default {
  name: 'vForm',
  provide () {
    return {
      form: this
    }
  },
  props: {
    model: {
      type: Object
    },
    rules: {
      type: Object
    },
    labelWidth: {
      type: Number
    }
  },
  data () {
    return {
      fields: new Set()
    }
  },
  created () {
    this.$on('on-form-item-add', field => {
      this.fields.add(field)
    })
    this.$on('on-form-item-remove', field => {
      if (field.prop) {
        this.fields.delete(field)
      }
    })
  },
  methods: {
    // 公开方法：重置全部数据
    resetField () {
      this.fields.forEach(field => {
        field.resetField()
      })
    },
    // 公开方法：校验全部表单
    validate (callback) {
      let valid = true
      let count = 0
      this.fields.forEach(field => {
        field.validate('', errors => {
          if (errors) {
            valid = false
          }
          if (++count === this.fields.size) {
            if (typeof callback === 'function') {
              callback(valid)
            }
          }
        })
      })
    }
  }
}
</script>
