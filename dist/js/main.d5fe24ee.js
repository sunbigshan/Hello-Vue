!function(l){function t(t){for(var e,n,r=t[0],i=t[1],o=t[2],a=0,s=[];a<r.length;a++)n=r[a],c[n]&&s.push(c[n][0]),c[n]=0;for(e in i)Object.prototype.hasOwnProperty.call(i,e)&&(l[e]=i[e]);for(p&&p(t);s.length;)s.shift()();return f.push.apply(f,o||[]),u()}function u(){for(var t,e=0;e<f.length;e++){for(var n=f[e],r=!0,i=1;i<n.length;i++){var o=n[i];0!==c[o]&&(r=!1)}r&&(f.splice(e--,1),t=d(d.s=n[0]))}return t}var n={},c={0:0},f=[];function d(t){if(n[t])return n[t].exports;var e=n[t]={i:t,l:!1,exports:{}};return l[t].call(e.exports,e,e.exports,d),e.l=!0,e.exports}d.e=function(i){var t=[],n=c[i];if(0!==n)if(n)t.push(n[2]);else{var e=new Promise(function(t,e){n=c[i]=[t,e]});t.push(n[2]=e);var r,o=document.createElement("script");o.charset="utf-8",o.timeout=120,d.nc&&o.setAttribute("nonce",d.nc),o.src=function(t){return d.p+"js/"+({}[t]||t)+"."+{2:"ba1a44b8",3:"00ec955c"}[t]+".js"}(i);var a=new Error;r=function(t){o.onerror=o.onload=null,clearTimeout(s);var e=c[i];if(0!==e){if(e){var n=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src;a.message="Loading chunk "+i+" failed.\n("+n+": "+r+")",a.name="ChunkLoadError",a.type=n,a.request=r,e[1](a)}c[i]=void 0}};var s=setTimeout(function(){r({type:"timeout",target:o})},12e4);o.onerror=o.onload=r,document.head.appendChild(o)}return Promise.all(t)},d.m=l,d.c=n,d.d=function(t,e,n){d.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},d.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},d.t=function(e,t){if(1&t&&(e=d(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(d.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)d.d(n,r,function(t){return e[t]}.bind(null,r));return n},d.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return d.d(e,"a",e),e},d.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},d.p="",d.oe=function(t){throw console.error(t),t};var e=window.webpackJsonp=window.webpackJsonp||[],r=e.push.bind(e);e.push=t,e=e.slice();for(var i=0;i<e.length;i++)t(e[i]);var p=r;f.push(["wx8R",1]),u()}({"69Kn":function(t,e,n){},TVFh:function(t,e,n){},YPna:function(t,e,n){t.exports=n.p+"imgs/fcbd652e.svg"},sjgn:function(t,e,n){"use strict";var r=n("69Kn");n.n(r).a},wx8R:function(t,e,r){"use strict";r.r(e);function n(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"wrapper"},[n("div",{staticClass:"left-menu"},[n("router-link",{attrs:{to:"/input"}},[t._v("Input")]),t._v(" "),n("router-link",{attrs:{to:"/form"}},[t._v("Form")])],1),t._v(" "),n("div",{staticClass:"right-content"},[n("router-view")],1)])}var i=r("Kw5r");n._withStripped=!0;r("zYWS");var o=r("KHd+"),a=Object(o.a)({},n,[],!1,null,null,null);a.options.__file="examples/app.vue";var s=a.exports,l=r("jE9Z");i.a.use(l.a);function u(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"demo-block"},[n("div",{staticClass:"demo-block-source"},[e._t("source"),e._v(" "),e.$slots.default?e._e():n("span",{staticClass:"demo-block-code-icon",on:{click:function(t){e.showCode=!e.showCode}}},[n("img",{staticClass:"code-expand-icon-show",attrs:{alt:"expand code",src:r("YPna")}})])],2),e._v(" "),e.$slots.default?n("div",{staticClass:"demo-block-meta"},[e._t("default"),e._v(" "),e.$slots.default?n("span",{staticClass:"demo-block-code-icon",on:{click:function(t){e.showCode=!e.showCode}}},[n("img",{staticClass:"code-expand-icon-show",attrs:{alt:"expand code",src:r("YPna")}})]):e._e()],2):e._e(),e._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:e.showCode,expression:"showCode"}],staticClass:"demo-block-code"},[e._t("highlight")],2)])}var c=[{path:"/input",component:function(t){return r.e(3).then(function(){return t(r("m7Cc"))}.bind(null,r)).catch(r.oe)}},{path:"/form",component:function(t){return r.e(2).then(function(){return t(r("gsZB"))}.bind(null,r)).catch(r.oe)}}],f=new l.a({mode:"hash",routes:c});u._withStripped=!0;var d={data:function(){return{showCode:!1}}},p=(r("sjgn"),Object(o.a)(d,u,[],!1,null,null,null));p.options.__file="examples/components/demo-block.vue";function h(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("input",{ref:"input",class:t.inputClasses,attrs:{type:"text",placeholder:t.placeholder},domProps:{value:t.currentValue},on:{input:t.handleInput,blur:t.handleBlur}})])}var v=p.exports;r("WB0v");h._withStripped=!0;var m={methods:{dispatch:function(t,e,n){for(var r=this.$parent||this.$root,i=r.$options.name;r&&(!i||i!==t);)(r=r.$parent)&&(i=r.$options.name);r&&r.$emit.apply(r,[e].concat(n))}}},b="v-input",g={name:"vInput",mixins:[m],props:{value:{type:[String,Number],default:""},placeholder:{type:String,default:""}},watch:{value:function(t){this.setCurrentValue(t)}},data:function(){return{currentValue:this.value,prefixCls:b}},computed:{inputClasses:function(){return["".concat(b)]}},methods:{handleInput:function(t){var e=t.target.value;this.setCurrentValue(e),this.$emit("input",e),this.dispatch("vFormItem","on-form-change",e)},handleBlur:function(){this.dispatch("vFormItem","on-form-blur",this.currentValue)},setCurrentValue:function(t){this.currentValue!==t&&(this.currentValue=t)}}},_=Object(o.a)(g,h,[],!1,null,null,null);_.options.__file="src/components/input/input.vue";function w(){var t=this.$createElement;return(this._self._c||t)("form",{staticClass:"v-form"},[this._t("default")],2)}var y=_.exports;w._withStripped=!0;var C={name:"vForm",provide:function(){return{form:this}},props:{model:{type:Object},rules:{type:Object},labelWidth:{type:Number}},data:function(){return{fields:new Set}},created:function(){var e=this;this.$on("on-form-item-add",function(t){e.fields.add(t)}),this.$on("on-form-item-remove",function(t){t.prop&&e.fields.delete(t)})},methods:{resetField:function(){this.fields.forEach(function(t){t.resetField()})},validate:function(e){var n=this,r=!0,i=0;this.fields.forEach(function(t){t.validate("",function(t){t&&(r=!1),++i===n.fields.size&&"function"==typeof e&&e(r)})})}}},O=Object(o.a)(C,w,[],!1,null,null,null);O.options.__file="src/components/form/form.vue";function j(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{class:t.prefixCls},[t.label?n("label",{class:[t.prefixCls+"-label"],style:t.labelStyles},[t._v(t._s(t.label))]):t._e(),t._v(" "),n("div",{class:[t.prefixCls+"-content"],style:t.contentStyles},[t._t("default"),t._v(" "),"error"===t.validateState?n("div",{class:[t.prefixCls+"-error-tip"]},[t._v("\n      "+t._s(t.validateMessage)+"\n    ")]):t._e()],2)])}var x=O.exports;j._withStripped=!0;var S=r("KpVd"),F={name:"vFormItem",inject:["form"],mixins:[m],props:{label:{type:String,default:""},prop:{type:String},labelWidth:{type:Number}},data:function(){return{prefixCls:"v-form-item",validateState:"",validateMessage:""}},computed:{filedValue:function(){return this.form.model[this.prop]},labelStyles:function(){var t={},e=0===this.labelWidth||this.labelWidth?this.labelWidth:this.form.labelWidth;return!e&&0!==e||(t.width="".concat(e,"px")),t},contentStyles:function(){var t={},e=0===this.labelWidth||this.labelWidth?this.labelWidth:this.form.labelWidth;return!e&&0!==e||(t.marginLeft="".concat(e,"px")),t}},mounted:function(){this.prop&&(this.dispatch("vForm","on-form-item-add",this),this.initialValue=this.filedValue,this.setRules())},methods:{setRules:function(){this.$on("on-form-blur",this.onFiledBlur),this.$on("on-form-change",this.onFIledChange)},getRules:function(){var t=this.form.rules;return t=t?t[this.prop]:[],[].concat(t)},getFilterRule:function(e){return this.getRules().filter(function(t){return!t.trigger||-1!==t.trigger.indexOf(e)})},resetField:function(){this.validateState="",this.validateMessage="",this.form.model[this.prop]=this.initialValue},validate:function(t,e){var n=this,r=1<arguments.length&&void 0!==e?e:function(){},i=this.getFilterRule(t);if(!i||0===i.length)return!0;this.validateState="validating";var o={};o[this.prop]=i;var a=new S.a(o),s={};s[this.prop]=this.filedValue,a.validate(s,{firstFields:!0},function(t){n.validateState=t?"error":"success",n.validateMessage=t?t[0].message:"",r(n.validateMessage)})},onFiledBlur:function(){this.validate("blur")},onFIledChange:function(){this.validate("change")}},beforeDestroy:function(){this.dispatch("vForm","on-form-item-remove",this)}},P=Object(o.a)(F,j,[],!1,null,null,null);P.options.__file="src/components/form/form-item.vue";var V=P.exports;x.Item=V;function $(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function k(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function E(e){E.installed||Object.keys(I).forEach(function(t){e.component(t,I[t])})}var I={VInput:y,VForm:x,VFormItem:x.Item};"undefined"!=typeof window&&window.Vue&&E(window.Vue);var W=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?$(n,!0).forEach(function(t){k(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):$(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}({install:E},I);i.a.use(W),i.a.component("demo-block",v);var M=new i.a({el:"#app",router:f,render:function(t){return t(s)}});i.a.use({vm:M})},zYWS:function(t,e,n){"use strict";var r=n("TVFh");n.n(r).a}});