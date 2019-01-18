import Vue from 'vue'
import App from './components/App.vue'
import Random from './components/Random.vue'
import './registerServiceWorker'

// Import vue-router
import VueRouter from 'vue-router'
Vue.use(VueRouter)

// Set up routes
const routes = [
	{ path: '/', component: App },
	{ path: '/random', component: Random }
];

// Set up VueRouter
new VueRouter({ routes });

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
  render: h => h(App),
  routes
}).$mount('#app')
