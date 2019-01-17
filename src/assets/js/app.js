import Header from '../../components/Header.vue'

export default {
  name: 'app',
  components: {
    Header
  },
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
        console.log(this.myGitHubData.repositories)
        return this.myGitHubData.repositories
      }
      return null
    }
  }
}
