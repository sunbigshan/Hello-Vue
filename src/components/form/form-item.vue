<template>
  <div>
    <label v-if="label">{{ label }}</label>
    <div>
      <slot></slot>
      <div
        v-if="validateState === 'error'"
        :class="[prefixCls + '-error-tip']">
        {{ validateMessage }}
      </div>
    </div>
  </div>
</template>

<script>
import AsyncValidator from 'async-validator'
import Emitter from '@/mixins/emitter'

const prefixCls = 'ivu-form-item'

export default {
  name: 'vFormItem',
  inject: ['form'],
  mixins: [Emitter],
  props: {
    label: {
      type: String,
      default: ''
    },
    prop: {
      type: String
    }
  },
  data () {
    return {
      prefixCls: prefixCls,
      validateState: '', // 校验状态
      validateMessage: '' // 校验不通过时的提示信息
    }
  },
  computed: {
    // 从 Form 的 model 中动态获取当前表单组件的数据
    filedValue () {
      return this.form.model[this.prop]
    }
  },
  mounted () {
    // 如果没有传入 prop，则无需校验，也就无需缓存
    if (this.prop) {
      this.dispatch('vForm', 'on-form-item-add', this)
      this.setRules()
    }
  },
  methods: {
    setRules () {
      this.$on('on-form-blur', this.onFiledBlur)
      this.$on('on-form-change', this.onFIledChange)
    },
    getRules () {
      // 从 Form 的 rules 属性中，获取当前 FormItem 的校验规则
      let formRules = this.form.rules

      formRules = formRules ? formRules[this.prop] : []

      return [].concat(formRules)
    },
    // 只支持 blur 和 change，所以过滤出符合要求的 rule 规则
    getFilterRule (trigger) {
      const rules = this.getRules()
      return rules.filter(rule => !rule.trigger || rule.trigger.indexOf(trigger) !== -1)
    },
    validate (trigger, callback = function () {}) {
      const rules = this.getFilterRule(trigger)

      if (!rules || rules.length === 0) {
        return true
      }

      // 设置状态为校验中
      this.validateState = 'validating'

      // 以下为 async-validator 库的调用方法
      const descriptor = {}
      descriptor[this.prop] = rules
      const validator = new AsyncValidator(descriptor)
      const model = {}

      model[this.prop] = this.filedValue

      validator.validate(model, { firstFields: true }, errors => {
        this.validateState = !errors ? 'success' : 'error'
        this.validateMessage = errors ? errors[0].message : ''

        callback(this.validateMessage)
      })
    },
    onFiledBlur () {
      this.validate('blur')
    },
    onFIledChange () {
      this.validate('change')
    }
  },
  beforeDestroy () {
    // 组件销毁前，将实例从 Form 的缓存中移除
    this.dispatch('vForm', 'on-form-item-remove', this)
  }
}
</script>
