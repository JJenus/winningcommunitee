<script setup>
	import { onMounted, ref } from "vue";
	import axios from "axios";

	import { Vue3Marquee } from "vue3-marquee";
	import "vue3-marquee/dist/style.css";
	import Won from "./Won.vue";

	const winners = ref([]);
	const env = import.meta.env;

	function loadWon() {
		let config = {
			method: "GET",
			url: `${env.VITE_BE_API}/testimonials/won`,
		};

		axios
			.request(config)
			.then((res) => {
				// console.log(res.data);
				let data = res.data;
				winners.value = data;
			})
			.catch((error) => {
				console.log(error);
			})
			.finally(() => {});
	}

	onMounted(() => {
		loadWon();
	});
</script>

<template>
	<div
		class="position-relative py-2 bg-transparent w-100"
	>
		<Vue3Marquee
			:pauseOnHover="true"
			@onPause="playState = 'paused'"
			@onResume="playState = 'playing'"
		>
			<Won v-for="winner in winners" :winner="winner" :key="winner.id" />
		</Vue3Marquee>
	</div>
</template>

<style scoped>
	.boxed {
		max-width: 100px;
		min-width: 100px;
	}
</style>
