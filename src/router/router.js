import {createRouter, createWebHistory} from 'vue-router'
import RootPage from '@/pages/RootPage'
import StudyPage from '@/pages/StudyPage'
import WorkPage from '@/pages/WorkPage'
import VuePage from '@/pages/VuePage'

const routes = [
  {
    path: '/',
    component: RootPage
  },
  {
    path: '/study',
    component: StudyPage
  },
  {
    path: '/work',
    component: WorkPage
  },
  {
    path: '/vue',
    component: VuePage
  }
]

const router = createRouter({
  routes,
  history: createWebHistory(process.env.BASE_URL)
})

export default router