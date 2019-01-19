import Vue from 'vue'
import Index from './components/Index.vue'
import Search from './components/Search.vue'
import './registerServiceWorker'

// Set up some simple routes
const routes = {
	'/': Index,
	'/search': Search
}

// vue-resource is needed for vue-github-api
import VueResource from 'vue-resource'
Vue.use(VueResource)

// import vue-github-api
import GitHubAPI from 'vue-github-api'
Vue.use(GitHubAPI, { token: process.env.VUE_APP_GITHUB_TOKEN })

// Import Bootstrap-Vue
import BootstrapVue from 'bootstrap-vue'
Vue.use(BootstrapVue)

// Imports Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// Hides the annoying 'You are running Vue in development mode.' text
Vue.config.productionTip = false

// Render and mount app
new Vue({
	el: '#app',
	data: {
		currentRoute: window.location.pathname
	},
	computed: {
		ViewComponent() {
			return routes[this.currentRoute] || Index
		}
	},
	render (h) {
		return h(this.ViewComponent)
	}
})
