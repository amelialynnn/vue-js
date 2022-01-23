import { createStore } from 'vuex'

const mutations = {
    increment(state) {
      state.counter += 1
    },
    saveFavorites(state, newCity) {
      state.favorite.push(newCity)
    }
  },
  state = {
    counter: 0,
    favorite: []
  }

export default createStore({ mutations, state, strict: true })
