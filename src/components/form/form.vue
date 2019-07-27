<template>
  <form class="v-form">
    <slot></slot>
  </form>
</template>

<script>
export default {
  name: 'vFrom',
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
  }
}
</script>
