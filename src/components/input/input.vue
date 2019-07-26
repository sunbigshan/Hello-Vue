<template>
  <div>
    <input
      ref="input"
      type="text"
      :value="currentValue"
      @input="handleInput">
  </div>
</template>

<script>
export default {
  name: 'vInput',
  props: {
    value: {
      type: [String, Number],
      default: ''
    }
  },
  watch: {
    value (val) {
      this.setCurrentValue(val)
    }
  },
  data () {
    return {
      currentValue: this.value
    }
  },
  methods: {
    handleInput (event) {
      const value = event.target.value
      this.setCurrentValue(value)
      this.$emit('input', value)
    },
    setCurrentValue (value) {
      if (this.currentValue === value) return
      this.currentValue = value
    }
  }
}
</script>
