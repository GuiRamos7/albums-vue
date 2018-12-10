import Vue from 'vue'
import Test from './App.vue'
import VueResource from 'vue-resource';

Vue.use(VueResource);

new Vue({
  el: '.testClass',
  render: h => h(Test)
})
