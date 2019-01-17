<template>
  <div id="app">
    <Header msg="Welcome to Discovery."/>
    <p>Repositories grabbed: {{ repositoriesCount }}</p>
  </div>
</template>

<script>
import Header from './components/Header.vue'

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
    repositoriesCount: function () {
      if (this.myGitHubData.repositories) {
        return this.myGitHubData.repositories.length
      }
      return 'none yet...'
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: sans-serif;
  color: #2c3e50;
}
</style>
