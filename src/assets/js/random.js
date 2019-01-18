const randomWords = require('random-words');
const word1 = randomWords();
// eslint-disable-next-line
console.log(`word1: ${word1}`);

export default {
	name: 'Random',
	data() {
		return {
			myGitHubData: {}
		}
	},
	mounted: function() {
		// eslint-disable-next-line
		console.log(`word1: ${word1}`);
		this.GitHubAPI.get('/search/repositories', {
			// Gets query from URL parameters
			'q': word1
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
