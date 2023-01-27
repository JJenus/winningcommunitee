<script setup>
	import { ref } from "vue";

	import { Vue3Marquee } from "vue3-marquee";
	import "vue3-marquee/dist/style.css";

	const winners = ref([]);

	function rand(min = 1000, max = 10000) {
		min = Math.ceil(min);
		max = Math.floor(max);
		return Math.floor(Math.random() * (max - min + 1)) + min;
	}

	function name(length) {
		var result = "";
		var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
		var charactersLength = characters.length;
		for (var i = 0; i < length; i++) {
			result += characters.charAt(
				Math.floor(Math.random() * charactersLength)
			);
		}
		return result;
	}

	function makeName() {
		return name(rand(5, 10)) + " " + name(rand(5, 15));
	}

	for (let i = 0; i < 5; i++) {
		// let name = makeName();

		// if (name.length > 10) {
		// 	name = name.split("");
		// 	name.length = 10;
		// 	name = name.join("") + "...";
		// 	console.log(name);
		// }

		winners.value.push({
			id: i,
			name: makeName(),
			amount: rand(),
		});
	}
</script>

<template>
	<div
		class="position-fixed bottom-0 py-2 bg-transparent"
		style="z-index: 3000"
	>
		<Vue3Marquee
			:pauseOnHover="true"
			@onPause="playState = 'paused'"
			@onResume="playState = 'playing'"
		>
			<div
				class="card me-3 border-warning border border-2 bg-dark"
				v-for="winner in winners"
				:key="winner.id"
			>
				<div
					class="d-flex justify-content-between align-items-center p-2 border-warning"
				>
					<div
						class="d-flex align-items-center fs-6 justify-content-center flex-column mb-0"
					>
						<i
							class="bi bi-check2-circle fs-5 text-dark-success"
						></i>
						<span>Won</span>
					</div>
					<div class="d-flex">
						<div class="ms-3">
							<h4 class="mb-1 text-light fs-5">
								${{ winner.amount }}
							</h4>
							<p class="mb-1 fs-6 pe-2 text-truncate boxed">
								{{ winner.name }}
							</p>
						</div>
					</div>
				</div>
			</div>
		</Vue3Marquee>
	</div>
</template>

<style scoped>
	.boxed {
		max-width: 100px;
		min-width: 100px;
	}
</style>
