import { createStore } from 'vuex'

const mutations = {
    saveFavorites(state, newCity) {
      state.favorite.push(newCity)
    },
    addUser(state, newUserName) {
      state.userInfo.push(newUserName)
    }
  },
  state = {
    favorite: [],
    userInfo: []
  }

export default createStore({ mutations, state, strict: true })
