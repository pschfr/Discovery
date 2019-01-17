<template>
    <div id="repos">
		<p>{{ repositories.length }} repositories grabbed.</p>
		<ul>
			<li v-for="(repo, index) in repositories" :key="index">
				<a :href="repo.html_url" target="_blank"><strong>{{ repo.name }}</strong></a>&nbsp;
				<span class="lang">{{ repo.language }}</span>
				<br/>
				{{ repo.description }}
			</li>
		</ul>
	</div>
</template>

<script src="../assets/js/repos.js"></script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style src="../assets/scss/repos.scss" scoped lang="scss"></style>
