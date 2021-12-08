import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: generativeContentSection => generativeContentSection(App),
}).$mount('#vue-app')
