import { hasOwnMetadata } from 'core-js/fn/reflect'
import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from "../views/home.vue"
import Board from "./views/board.vue"
import About from "./views/about.vue"
Vue.use(VueRouter)

//router 정의법
//import 로 가져온ㄷ
//router 등록을 한다(routes 배열)
//{path: "라우터 주소", name:"라우터 생성", component: "import로 가져온 컴포넌트"}
const routes = [
  {
    path:"/",
    name: "home",
    component:Home
  },
  {
    path:"/about",
    name:"about",
    component:About
  },
  {
    path:"/board",
    name: "board",
    component: board
  }
  ]}
 
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
