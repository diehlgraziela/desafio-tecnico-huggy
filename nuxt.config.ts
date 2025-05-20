// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-05-15",
  devtools: { enabled: true },
  modules: ["@nuxt/eslint", "dayjs-nuxt"],
  css: ["~/assets/index.css"],
  runtimeConfig: {
    apiSecret:
      "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjY3NTkzZmMzODIwNTA4MGViN2ZjY2VjMWExNDA3YTJmYzE4N2RiMTQxNjY4MWI1OGEyMDE4YTBlNzUyMjhkM2I1N2MxYjNjYTFiZjM4N2NjIn0.eyJhdWQiOiJBUFAtYTNjMDViYmUtZjJiMy00NDdhLWFhNGItNTc2YzUzNWYxOTY5IiwianRpIjoiNjc1OTNmYzM4MjA1MDgwZWI3ZmNjZWMxYTE0MDdhMmZjMTg3ZGIxNDE2NjgxYjU4YTIwMThhMGU3NTIyOGQzYjU3YzFiM2NhMWJmMzg3Y2MiLCJpYXQiOjE3NDc2MDcwNzAsIm5iZiI6MTc0NzYwNzA3MCwiZXhwIjoxNzYzNTA0NjcwLCJzdWIiOiIxNjU0MDciLCJzY29wZXMiOlsiaW5zdGFsbF9hcHAiLCJyZWFkX2FnZW50X3Byb2ZpbGUiXX0.j_1mVrD881ZY5qlDCS8Y6n3Oco9lrBa6MEpFcM1xOqxPpZ6AP6w-F-Z1mgH2coyw-FR7ZSoSgKoTzp6LgT4Qf3XZGWfuuGOQb-ZZJIPiPmAiMxEem3Siqd_P9IyRQPKvW-ihm7ccdI-bwwVucLK15nbJ7pWhI9_1O_SDuw6M0-w",
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
