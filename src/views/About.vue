<template>
	<mdb-container fluid grid-list-xl>
		<mdb-row>
			<mdb-col col="9">
				<h1>About Page</h1>
			</mdb-col>
			<mdb-col col="3"></mdb-col>
		</mdb-row>
	</mdb-container>
</template>

<script>
	import { mdbContainer, mdbRow, mdbCol } from 'mdbvue'

	export default {
		name: 'home',
		components: {
			mdbContainer,
			mdbRow,
			mdbCol,
		},
	}
</script>

<style></style>
