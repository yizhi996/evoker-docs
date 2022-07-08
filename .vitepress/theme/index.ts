import DefaultTheme from 'vitepress/theme'

import './index.css'

import {
  create,
  // component
  NTabs,
  NTab,
  NTabPane
} from 'naive-ui'

const naive = create({
  components: [NTabs, NTab, NTabPane]
})

import Icon from './components/Icon.vue'
import Props from './components/Props.vue'
import Events from './components/Events.vue'
import Results from './components/Results.vue'

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.component('Props', Props)
    app.component('Events', Events)
    app.component('Results', Results)
    app.component('Icon', Icon)
    app.use(naive)
  }
}
