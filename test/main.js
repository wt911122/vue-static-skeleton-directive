import Vue from 'vue'
import skeletonDirective from '../index';
import App from './App.vue'
Vue.use(skeletonDirective);
export default new Vue({
  el: '#app',
  render: h => h(App)
})