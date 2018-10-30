import Vue from 'vue';
import Router from 'vue-router';
import Video from '../views/Video/index.vue';
import Settings from '../views/Settings/index.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: '/',
  routes: [
    {
      path: '/',
      redirect: '/video',
      name: 'home',
      component: Video
    },
    {
      path: '/video',
      name: 'tab-video',
      component: Video
    },
    {
      path: '/settings',
      name: 'tab-settings',
      component: Settings
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    }
  ]
});
