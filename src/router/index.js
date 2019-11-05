import Vue from 'vue'
import VueRouter from 'vue-router'

import Main from '../views/main'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'main',
    component: Main
  },
  {
    path: '/detail',
    name: 'detail',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/detail.vue')
  },{
    path:"/main",
    component:Main,
    children:[
      {
        path:"edu",
        name:"edu",
        component:()=>import("../views/main/edu.vue")
      },
      {
        path:"home",
        name:"home",
        component:()=>import("../views/main/home.vue")
      },
      {
        path:"idea",
        name:"idea",
        component:()=>import("../views/main/idea.vue")
      },
      {
        path:"msg",
        name:"msg",
        component:()=>import("../views/main/msg.vue")
      },{
        path:"my",
        name:"my",
        component:()=>import("../views/main/my.vue")
      },
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
