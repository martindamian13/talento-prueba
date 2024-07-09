export default defineNuxtConfig({
  css: [
    '@/assets/css/tailwind.css',
    'element-plus/dist/index.css',
  ],

  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs-alt/axios',
  ],

  axios: {
    baseURL: 'http://localhost:8000', // Cambia esta URL si tu API está en otra dirección
    credentials: true, //Incluir credenciales
  },

  plugins: [
    '@/plugins/element-plus',
  ],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  compatibilityDate: '2024-07-09',
});