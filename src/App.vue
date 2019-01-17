<template>
  <div id="app">
    <Header msg="Welcome to Discovery."/>
    <p>{{ repositories.length }} repositories grabbed.</p>
    <ul id="repos">
      <li v-for="(repo, index) in repositories" :key="index">
        <h3>
          <a :href="repo.html_url" target="_blank">
            {{ repo.name }}
          </a>
        </h3>
        <p>{{ repo.description }}</p>
      </li>
    </ul>
  </div>
</template>

<script src="./assets/js/app.js"></script>
<style src="./assets/scss/app.scss" lang="scss"></style>
