export default {
	name: 'Repos',
	data() {
	  return {
		myGitHubData: {}
	  }
	},
	mounted: function() {
	  this.GitHubAPI.get('/user/repos', {}, [this.myGitHubData, 'repositories'])
	},
	computed: {
	  repositories: function() {
		if (this.myGitHubData.repositories) {
		  return this.myGitHubData.repositories
		}
		return ''
	  }
	}
}
