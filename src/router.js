import Vue from 'vue';
import Router from 'vue-router';

import Webobj from '@/views/Webobj.vue';
import Tmall from '@/views/Tmall.vue';
import Starbucks from '@/views/Starbucks.vue';
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name:'webobj',
      component: Webobj,
      children:[
        {
          path:'/tmall',
          name:'tmall',
          component:Tmall
        },
        {
          path:'/starbucks',
          name:'Starbucks',
          component:Starbucks
        }
      ]
    },
  ],
});
