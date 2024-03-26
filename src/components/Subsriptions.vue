<script setup>
	import axios from "axios";
	import { onMounted, ref } from "vue";
	import PayPalPlan from "./PayPalPlan.vue";

	const env = import.meta.env;
	const subscriptions = ref([]);

	async function loadSubscriptions() {
		let config = {
			method: "GET",
			url: `${env.VITE_BE_API}/subscriptions/?type=primary`,
		};

		axios
			.request(config)
			.then((res) => {
				// console.log(res);
				let data = res.data;
				subscriptions.value = data;
			})
			.catch((error) => {
				// console.log(error);
			})
			.finally(() => {});
	}

	onMounted(() => {
		loadSubscriptions();
	});
</script>

<template>
	<div class="card bg-transparent my-5 w-100">
		
		<div class="card-body">
			<h1 class="text-light text-center mb-3">Subscription Plans</h1>
			<div class="row row-cols-1 row-cols-md-3 justify-content-center">
				<PayPalPlan v-for="plan in subscriptions" :plan="plan" />
			</div>
		</div>
	</div>
</template>
