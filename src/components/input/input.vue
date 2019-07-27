<template>
  <div>
    <input
      ref="input"
      type="text"
      :class="inputClasses"
      :value="currentValue"
      :placeholder="placeholder"
      @input="handleInput"
      @blur="handleBlur">
  </div>
</template>

<script>
import Emitter from '@/mixins/emitter'

const prefixCls = 'v-input'

export default {
  name: 'vInput',
  mixins: [Emitter],
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
      currentValue: this.value,
      prefixCls: prefixCls
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
      this.dispatch('vFormItem', 'on-form-change', value)
    },
    handleBlur () {
      this.dispatch('vFormItem', 'on-form-blur', this.currentValue)
    },
    setCurrentValue (value) {
      if (this.currentValue === value) return
      this.currentValue = value
    }
  }
}
</script>
