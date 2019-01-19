<template>
	<div id="app">
		<b-container>
			<Header msg="Discovery"/>
			<b-jumbotron>
				<template slot="header">
					Welcome to Discovery.
				</template>
				<template slot="lead">
					A simple alternative to GitHub's Discover page, written in Vue.
				</template>
				<hr class="my-4">
				<b-btn variant="primary" href="/search?q=cats">Start Exploring</b-btn> &nbsp;
				<b-btn variant="success" href="https://github.com/pschfr/Discovery" target="_blank">View Source</b-btn>
			</b-jumbotron>
		</b-container>
	</div>
</template>

<script src="../assets/js/index.js"></script>
<style src="../assets/scss/index.scss" lang="scss"></style>
