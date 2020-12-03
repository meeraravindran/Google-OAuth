
import Vue from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.min.css'

import VueRouter from 'vue-router';
Vue.use(VueRouter);
import VueAxios from 'vue-axios';
import axios from 'axios';

Vue.use(VueAxios, axios);

Vue.config.productionTip = false;

import HomeComponent from './components/Home.vue';
import UserComponent from './components/User.vue';


const routes = [
  {
      name: 'home',
      path: '/',
      component: HomeComponent
  },
  {
    name: 'user',
    path: '/user',
    component: UserComponent
}
];

const router = new VueRouter({ mode: 'history', routes: routes});

new Vue(Vue.util.extend({ router }, App)).$mount('#app');