<template>
    <div id="repos">
		<b-table striped outlined bordered small responsive :items="repositories" :fields="fields">
			<template slot="full_name" slot-scope="data">
				<b-link :href=data.item.html_url target="_blank">{{ data.item.full_name }}</b-link>
			</template>
		</b-table>
	</div>
</template>

<script src="../assets/js/repos.js"></script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style src="../assets/scss/repos.scss" scoped lang="scss"></style>
