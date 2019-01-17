export default {
	name: 'Repos',
	data() {
		return {
			myGitHubData: {}
		}
	},
	mounted: function() {
		this.GitHubAPI.get('/search/repositories', {
			// Gets query from URL parameters
			'q': new URLSearchParams(window.location.search).get('q')
		}, [this.myGitHubData, 'repositories'])
	},
	computed: {
		// Returns list of repos from API
		repositories: function() {
			if (this.myGitHubData.repositories) {
				// eslint-disable-next-line
				console.log(this.myGitHubData.repositories.items)
				return this.myGitHubData.repositories.items
			}
			return []
		},
		// List of API endpoints to list in table
		fields: function() {
			return [
				{
					key: 'full_name',
					sortable: true,
					isRowHeader: true,
					label: 'Name'
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
				},
				{
					key: 'forks_count',
					sortable: true,
					label: 'Forks'
				}
			]
		}
	}
}
