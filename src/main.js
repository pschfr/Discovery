import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'

// vue-resource is needed for vue-github-api
import VueResource from 'vue-resource'
Vue.use(VueResource)

// import vue-github-api
import GitHubAPI from 'vue-github-api'
Vue.use(GitHubAPI, { token: process.env.VUE_APP_GITHUB_TOKEN })

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
