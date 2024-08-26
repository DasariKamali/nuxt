export default {
  buildModules: [
    '@nuxt/typescript-build'
  ],
  modules: [
    '@nuxtjs/axios'
  ],
  axios: {
    baseURL: '' 
  },
  target: 'static', 

  generate: {
    dir: 'dist' 
  },
}
