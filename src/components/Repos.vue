<template>
    <div id="repos">
		<p>{{ repositories.length }} repositories grabbed.</p>
		<ul>
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

<script src="../assets/js/repos.js"></script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style src="../assets/scss/repos.scss" scoped lang="scss"></style>
