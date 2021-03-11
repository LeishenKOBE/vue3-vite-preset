import {createRouter, createWebHashHistory} from 'vue-router';
const routes = [
  {
    path: '/',
    component: () => import('../views/home/index.vue'),
    redirect: '/index',
  },
  {
    path: '/index',
    component: () => import('../views/home/index.vue'),
  },
];

var router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
