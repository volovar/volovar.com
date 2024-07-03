import type { NavigationGuard } from 'vue-router'
export type MiddlewareKey = string
declare module "/mnt/c/Users/video/Development/volovar.com/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    middleware?: MiddlewareKey | NavigationGuard | Array<MiddlewareKey | NavigationGuard>
  }
}