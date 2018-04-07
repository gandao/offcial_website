import Vue from 'vue'
import Router from 'vue-router'
import home_page from "../components/home_page/home_page"
import log_in from "../components/log_in/log_in"
import detail from "../components/detail/detail"
Vue.use(Router)

export default new Router({
  routes: [{
    path: "/home_page",
    component: home_page,
    name: 'home_page'
  },{
    path: "/log_in",
    component: log_in,
    name: 'log_in'
  },{
    path: "/detail",
    component: detail,
    name: 'detail'
  },{
    path: "/",
    redirect: '/home_page'
  }
  ]
})
