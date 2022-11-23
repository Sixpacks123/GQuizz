import Home from './views/Home.vue'
import Arts from './views/Arts.vue'
//import About from './views/About.vue'
import NotFound from './views/NotFound.vue'

/** @type {import('vue-router').RouterOptions['routes']} */
export let routes = [
  { path: '/', component: Home, meta: { title: 'Home' } },
  { path: '/arts', component: Arts, meta: { title: 'Arts movements' } },
  { path: '/:path(.*)', component: NotFound },
]
