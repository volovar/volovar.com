import { ComputedRef, Ref } from 'vue'
export type LayoutKey = string
declare module "/mnt/c/Users/video/Development/volovar.com/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    layout?: false | LayoutKey | Ref<LayoutKey> | ComputedRef<LayoutKey>
  }
}