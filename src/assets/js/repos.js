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
		// Returns list of repos from API
		repositories: function() {
			if (this.myGitHubData.repositories) {
				console.log(this.myGitHubData.repositories)
				return this.myGitHubData.repositories
			}
			return []
		},
		// List of API endpoints to list in table
		fields: function() {
			return [
				{
					key: 'name',
					sortable: true,
					isRowHeader: true
				},
				{
					key: 'description',
					sortable: false
				},
				{
					key: 'language',
					sortable: true
				},
				{
					key: 'stargazers_count',
					sortable: true,
					label: 'Stars'
				}
			]
		}
	}
}
