// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-05-15",
  devtools: { enabled: true },
  modules: ["@nuxt/eslint", "dayjs-nuxt"],
  css: ["~/assets/index.css"],
  runtimeConfig: {
    apiSecret: process.env.API_SECRET,
  },
});
