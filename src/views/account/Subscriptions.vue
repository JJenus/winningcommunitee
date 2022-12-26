<script setup>
	import axios from "axios";
	import { onMounted, ref } from "vue";
	import SubscriptionVue from "@/components/account/subscriptions/Subscription.vue";
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
	<div class="card border-0">
		<!-- Card header -->
		<div
			class="card-header d-lg-flex justify-content-between align-items-center"
		>
			<div class="mb-3 mb-lg-0">
				<h3 class="mb-0">My Subscriptions</h3>
				<p class="mb-0">
					Here is list of package/product that you have subscribed.
				</p>
			</div>
			<div>
				<a href="pricing.html" class="btn d-none btn-success btn-sm"
					>Upgrade Now — Go Pro $39.00</a
				>
			</div>
		</div>
		<!-- Card body -->
		<div class="card-body">
			<SubscriptionVue
				v-for="subscription in subscriptions"
				:subscription="subscription"
			></SubscriptionVue>
			<div class="pt-5">
				<div class="row mb-4">
					<div class="col mb-2 mb-lg-0">
						<span class="d-block">
							<span class="h4">Free Plan</span>
							<span class="badge bg-danger ms-2">
								Expired</span
							></span
						>
						<p class="mb-0 fs-6">Subscription ID: #100010001</p>
					</div>
					<div class="col-auto">
						<a href="#" class="btn btn-light btn-sm disabled"
							>Disabled</a
						>
					</div>
				</div>
				<div class="row">
					<div class="col-lg-3 col-md-3 col-6 mb-2 mb-lg-0">
						<span class="fs-6">Started On</span>
						<h6 class="mb-0 d-none">Sept 1, 2020</h6>
					</div>
					<div class="col-lg-3 col-md-3 col-6 mb-2 mb-lg-0">
						<span class="fs-6">Price</span>
						<h6 class="mb-0">Free - Trial a Month</h6>
					</div>
					<div class="col-lg-3 col-md-3 col-6 mb-2 mb-lg-0">
						<span class="fs-6">Access</span>
						<h6 class="mb-0">Basic</h6>
					</div>
					<div class="col-lg-3 col-md-3 col-6 mb-2 mb-lg-0">
						<span class="fs-6">Billing Date</span>
						<h6 class="mb-0 d-none">Next Billing on Oct 1, 2020</h6>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
