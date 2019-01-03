import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(Vuex)

Vue.use(VueAxios, axios)

export default new Vuex.Store({
  state: {
    beers: [],
    loading: true,
    pagination_parameters: '',
    filter_parameters: ''
  },
  mutations: {
    SET_BEERS (state, beers) {
      state.beers = beers
    },
    ADD_BEERS (state, beers) {
      // concat the two arrays and remove duplicates if any.

      var tempList = [...state.beers, ...beers]
      let obj = {}
      let prop = 'id'
      var uniqueArray = Object.keys(tempList.reduce((prev, next) => {
        if (!obj[next[prop]]) obj[next[prop]] = next
        return obj
      }, obj)).map((i) => obj[i])
      state.beers = uniqueArray
    },
    SET_PAGINATION_PARAMETERS (state, parameters) {
      state.pagination_parameters = parameters
    },
    SET_FILTERS_PARAMETERS (state, parameters) {
      state.filter_parameters = parameters
    },

    SET_LOADING (state, bol) {
      state.loading = bol
    }

  },
  getters: {

  },
  actions: {
    fetchBeers ({
      commit
    }) {
      commit('SET_LOADING', true)
      axios
        .get('https://api.punkapi.com/v2/beers' + '?' + this.state.pagination_parameters + '&' + this.state.filter_parameters)
        .then(response => response.data)
        .then(beers => {
          if (beers.length === 0) console.log('Data was empty')
          console.log('SET BEER Fetching from API')
          console.log(beers)
          commit('SET_BEERS', beers)
          commit('SET_LOADING', false)
        })
        .catch((err) => console.log(err))
    },
    fetchMoreBeers ({
      commit
    }) {
      commit('SET_LOADING', true)
      axios
        .get('https://api.punkapi.com/v2/beers' + '?' + this.state.pagination_parameters + '&' + this.state.filter_parameters)
        .then(response => response.data)
        .then(beers => {
          if (beers.length === 0) console.log('Data was empty')
          console.log('ADDING BEER Fetching from API')
          console.log(beers)
          commit('ADD_BEERS', beers)
          commit('SET_LOADING', false)
        })
        .catch((err) => console.log(err))
    },
    fetchUniqueBeers ({
      commit
    }, parameter) {
      commit('SET_LOADING', true)
      axios
        .get('https://api.punkapi.com/v2/beers/' + parameter)
        .then(response => response.data)
        .then(beers => {
          if (beers.length === 0) console.log('Data was empty')
          console.log('UNIQUE BEER Fetching from API')
          console.log(beers)
          commit('SET_BEERS', beers)
          commit('SET_LOADING', false)
        })
        .catch((err) => console.log(err))
    }
  }
})
