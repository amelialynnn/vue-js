import { createRouter, createWebHashHistory } from 'vue-router'

import SavedView from './views/SavedView.vue'
import SearchView from './views/SearchView.vue'
import GlobalView from './views/GlobalView.vue'
import SignupView from './views/SignupView.vue'

export default createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      component: SearchView,
      path: '/'
    },
    {
      name: 'user',
      component: SavedView,
      path: '/saved/:userName?'
    },
    {
      component: GlobalView,
      path: '/global'
    },
    {
      component: SignupView,
      path: '/signup'
    }
  ]
})
