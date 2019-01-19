import Vue from 'vue'
import Index from './components/Index.vue'
import './registerServiceWorker'

// vue-resource is needed for vue-github-api
import VueResource from 'vue-resource'
Vue.use(VueResource)

// import vue-github-api
import GitHubAPI from 'vue-github-api'
Vue.use(GitHubAPI, { token: process.env.VUE_APP_GITHUB_TOKEN })

import BootstrapVue from 'bootstrap-vue'
Vue.use(BootstrapVue)

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.config.productionTip = false

new Vue({
  render: h => h(Index),
}).$mount('#app')
