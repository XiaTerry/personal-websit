import Vue from 'vue';
import Router from 'vue-router';

import Webobj from '@/views/Webobj.vue';
import CssAnimation from '@/views/CssAnimation.vue';
import Jquery from '@/views/Jquery.vue';
import Contact from '@/views/Contact.vue';
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name:'webobj',
      component: Webobj,
      children:[
        {
          path:'/css-animation',
          name:'cssanimation',
          component:CssAnimation
        },
        {
          path:'/jquery',
          name:'jquery',
          component:Jquery
        }
      ]
    },
    {
      path:'/contact',
      name:'contact',
      component:Contact
    }
  ],
});
