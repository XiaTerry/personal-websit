import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import 'animate.css/animate.min.css'
import '@/assets/css/reset.css';
import '@/assets/css/common.css';
import '@/assets/font/iconfont.css';
import '@/assets/js/jquery-1.12.4.js';
Vue.config.productionTip = false;
Vue.use(ElementUI);
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
