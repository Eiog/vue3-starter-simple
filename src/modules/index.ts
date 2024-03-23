import type { App } from 'vue'
import { setupPinia } from './pinia'
import { setupI18n } from './i18n'
import { setupRouter } from './router'
import { setupHead } from './usehead'
import { setupDirectives } from './directives'
import { setupAssets } from './assets'
import { setupNotivue } from './notivue'

export function useModules(app: App) {
  setupRouter(app)
  setupPinia(app)
  setupI18n(app)
  setupHead(app)
  setupDirectives(app)
  setupNotivue(app)
  setupAssets()
}