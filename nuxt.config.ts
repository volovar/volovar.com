// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      charset: "utf-8",
      meta: [{ name: "description", content: "Homepage for Michael Volovar" }],
      title: "volovar.com",
      viewport: "width=device-width, initial-scale=1"
    }
  }
});
