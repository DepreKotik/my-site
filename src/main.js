import { createApp } from 'vue'
import App from '@/App.vue'
import router from '@/router/router'
import ui from '@/components/ui'

const app = createApp(App)

ui.forEach(component => {
  app.component(component.name, component)
});

app.use(router).mount('#app')
