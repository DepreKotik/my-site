import {createRouter, createWebHistory} from 'vue-router'
import RootPage from '@/pages/RootPage'
import StudyPage from '@/pages/StudyPage'
import WorkPage from '@/pages/WorkPage'

const routes = [
  {
    path: '/',
    component: RootPage,
    meta: { transition: 'slide-left' }
  },
  {
    path: '/study',
    component: StudyPage,
    meta: { transition: 'slide-left' }
  },
  {
    path: '/work',
    component: WorkPage,
    meta: { transition: 'slide-left' }
  }
]

const router = createRouter({
  routes,
  history: createWebHistory(process.env.BASE_URL)
})

export default router