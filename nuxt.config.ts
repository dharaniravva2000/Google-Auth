// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ["@/assets/resources/css/styles.css"],

  modules: [
    "nuxt-vue3-google-signin"],

    runtimeConfig:{
      googleClientId: process.env.GOOGLE_CLIENT_ID,

    },

  googleSignIn: {
   clientId: process.env.GOOGLE_CLIENT_ID,
 },

  compatibilityDate: "2024-08-12"
})