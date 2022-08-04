<template>
	<v-app>
		<v-app-bar fixed color="yellow lighten-4">
			<v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>
		</v-app-bar>
		<v-navigation-drawer v-model="drawer" absolute temporary>
			<v-list nav dense>
				<v-list-item-group v-model="group" active-class="deep-purple--text text--accent-4">
					<v-list-item>
						<v-list-item-icon>
							<v-icon>mdi-home</v-icon>
						</v-list-item-icon>
						<v-list-item-title>ProProProduction</v-list-item-title>
					</v-list-item>

					<v-list-item>
						<v-list-item-icon>
							<v-icon>mdi-twitter</v-icon>
						</v-list-item-icon>
						<v-list-item-title>Rin Twintter</v-list-item-title>
					</v-list-item>
				</v-list-item-group>
			</v-list>
		</v-navigation-drawer>

		<v-main>
			<HelloWorld />
		</v-main>
		<v-footer padless fixed color="yellow lighten-4">
			<v-col class="text-center" cols="12">
				2022 — Rin Birthday Message
			</v-col>
		</v-footer>
	</v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld';

export default {
	name: 'App',

	components: {
		HelloWorld,
	},

	data: () => ({
		drawer: false,
		group: null,
	}),
};

</script>

<style>
.v-application {
	font-family: "M PLUS Rounded 1c" !important;
}
</style>