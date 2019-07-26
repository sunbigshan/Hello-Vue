<template>
  <div>
    <input
      ref="input"
      type="text"
      :class="inputClasses"
      :value="currentValue"
      :placeholder="placeholder"
      @input="handleInput">
  </div>
</template>

<script>
const prefixCls = 'v-input'

export default {
  name: 'vInput',
  props: {
    value: {
      type: [String, Number],
      default: ''
    },
    placeholder: {
      type: String,
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
  computed: {
    inputClasses () {
      return [
        `${prefixCls}`
      ]
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
