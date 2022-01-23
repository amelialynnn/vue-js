import { createRouter, createWebHashHistory } from 'vue-router'

import SavedView from './views/SavedView.vue'
import SearchView from './views/SearchView.vue'
import GlobalView from './views/GlobalView.vue'

export default createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      component: SearchView,
      path: '/'
    },
    {
      component: SavedView,
      path: '/saved'
    },
    {
      component: GlobalView,
      path: '/global'
    }
  ]
})
