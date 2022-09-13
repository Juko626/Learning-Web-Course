import Vue from 'vue'
import VueRouter from 'vue-router'
//vuews 로 부터 import로 가져온다
import Main from "../views/Main"
import List from "../views/todos/List"
import Detail from "../views/todos/Detail"

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    name : "Main",
    component : Main
  },
  {
    path: "/todos",
    name : "List",
    component : List
  },
  {
    path: "/todos/:id",
    name : "Detail",
    component:Detail
  }
 
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
