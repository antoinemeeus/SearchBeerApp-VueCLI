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
  }
  ]
})
