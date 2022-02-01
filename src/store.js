import { createStore } from 'vuex'

const mutations = {
    saveFavorites(state, newCity) {
      state.favorite.push(newCity)
    },
    addUser(state, userData) {
      state.userInfo.push(userData)
    }
  },
  state = {
    favorite: [],
    userInfo: []
  }

export default createStore({ mutations, state, strict: true })
