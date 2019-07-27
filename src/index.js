import VInput from './components/input'
import VForm from './components/form'

const components = {
  VInput,
  VForm,
  VFormItem: VForm.Item
}

const install = Vue => {
  if (install.installed) return
  Object.keys(components).forEach(key => {
    Vue.component(key, components[key])
  })
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

const API = {
  install,
  ...components
}

export default API
