import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import DisplaySearchResults from './views/DisplaySearchResults.vue'
import DisplayBeer from './views/DisplayBeer.vue'
Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/results',
    name: 'results',
    component: DisplaySearchResults
  },
  {
    path: '/beer/:id',
    name: 'beer',
    props: true,
    component: DisplayBeer
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
  }
  ]
})
