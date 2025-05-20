// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-05-15",
  devtools: { enabled: true },
  modules: ["@nuxt/eslint", "dayjs-nuxt"],
  css: ["~/assets/index.css"],
  runtimeConfig: {
    accessToken: process.env.ACCESS_TOKEN,
    clientId: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    callbackUrl: process.env.CALLBACK_URL,
    public: {
      env: process.env.NODE_ENV,
    },
  },
  app: {
    head: {
      title: "Desafio Técnico Huggy",
    },
  },
});
