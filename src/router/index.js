import { createMemoryHistory, createRouter } from 'vue-router'

import home from '../views/home.vue'
import posehub from '../views/posehub.vue'
import training_pkg from '../views/training-pkg.vue'
import me from '../views/me.vue'

const routes = [
    { path: '/home', component: home },
    { path: '/posehub', component: posehub },
    { path: '/training-pkg', component: training_pkg },
    { path: '/me', component: me },
]

const router = createRouter({
    history: createMemoryHistory(),
    routes,
})
export default router