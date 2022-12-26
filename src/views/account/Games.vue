<script setup>
	import axios from "axios";
	import { onMounted, ref } from "vue";
	import { user } from "@/stores/user";

	const env = import.meta.env;
	const subscriptions = ref([]);

	async function loadSubscriptions() {
		let config = {
			method: "GET",
			url: `${env.VITE_BE_API}/user-subscriptions/${user.getUser().id}`,
		};

		axios
			.request(config)
			.then((res) => {
				console.log(res);
				let data = res.data;
				subscriptions.value = data;
			})
			.catch((error) => {
				console.log(error);
			})
			.finally(() => {});
	}

	onMounted(() => {
		loadSubscriptions();
	});
</script>

<template>
	<div class="card">
		<!-- Card header -->
		<div class="card-header">
			<h3 class="mb-0">Games</h3>
		</div>
		<!-- Card body -->
		<div class="card-body d-flex justify-content-center">
            <h5 v-if="subscriptions.length > 0"  class="text-info">
                Please contact support to get access
            </h5>
            <h5 v-else class="">
                Click on plans in the menu and
                kindly subscribe to a plan that suits you and have full access to our games
            </h5>
        </div>
	</div>
</template>
