<template>
    <div id="repos">
		<b-table striped outlined bordered small :items="repositories" :fields="fields">
			<template slot="name" slot-scope="data">
				<b-link :href=data.item.html_url target="_blank">{{ data.item.name }}</b-link>
			</template>
		</b-table>
		<p id="length">{{ repositories.length }} repositories grabbed.</p>
	</div>
</template>

<script src="../assets/js/repos.js"></script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style src="../assets/scss/repos.scss" scoped lang="scss"></style>
