import Vue from 'vue'
import Test from './App.vue'
import VueResource from 'vue-resource';
import VueRouter from 'vue-router';
import {routes} from './routes';


Vue.use(VueResource);
Vue.use(VueRouter);


const router = new VueRouter({
  routes: routes,
  mode: 'history'
})




new Vue({
  el: '.testClass',
  router: router, 
  render: h => h(Test)
})
