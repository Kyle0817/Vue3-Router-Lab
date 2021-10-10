import { createRouter, createWebHashHistory } from 'vue-router';
import Home from '../views/Home.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: 'about' */ '../views/About.vue'),
  },
  {
    path: '/newPage',
    name: 'newPage',
    component: () => import('../views/NewPage.vue'),
    children: [
      {
        path: 'a',
        component: () => import('../views/ComponentA.vue'),
      },
      {
        path: 'b',
        component: () => import('../views/ComponentB.vue'),
      },
      {
        path: 'dynamicRouter/:id',
        component: () => import('../views/DynamicRouter.vue'),
      },
      {
        path: 'dynamicRouterByProps/:id',
        component: () => import('../views/DynamicRouterByProps.vue'),
        props: (route) => ({
          id: route.params.id,
        }),
      },
      {
        path: 'routerNavigation',
        component: () => import('../views/RouterNavigation.vue'),
      },
      {
        path: 'namedView',
        component: () => import('../views/NamedView.vue'),
        children: [
          {
            path: 'cToa',
            components: {
              left: () => import('@/views/ComponentC.vue'),
              right: () => import('@/views/ComponentA.vue'),
            },
          },
          {
            path: 'aTob',
            components: {
              left: () => import('@/views/ComponentA.vue'),
              right: () => import('@/views/ComponentB.vue'),
            },
          },
        ],
      },
    ],
  },
  // 404頁面
  {
    path: '/:pathMatch(.*)*',
    component: () => import('../views/NotFound.vue'),
  },
  // 重新導頁
  {
    path: '/newPage/:pathMatch(.*)*',
    redirect: {
      name: 'Home',
    },
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  linkActiveClass: 'active',
  scrollBehavior(to, from, savedPosition) {
    console.log(to, from, savedPosition);
    if (to.fullPath.match('newPage')) {
      return {
        top: 0,
      };
    }
    return {};
  },
});

export default router;
