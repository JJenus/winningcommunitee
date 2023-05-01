<script setup>
	import axios from "axios";
	import { onMounted, ref } from "vue";
	import { user } from "@/stores/user";

	import PlanVue from "@/components/account/plans/Plan.vue";

	const env = import.meta.env;
	const plans = ref([]);
	const subscription = ref(null);
	const subscriptions = ref([]);

	function loadSubscriptions() {
		let config = {
			method: "GET",
			url: `${env.VITE_BE_API}/user-subscriptions/${user.getUser().id}`,
		};

		axios
			.request(config)
			.then((res) => {
				// console.log(res);
				let data = res.data;
				subscriptions.value = data;
				if (data.length > 0) {
					subscription.value = data[data.length - 1];
				}
			})
			.catch((error) => {
				// console.log(error);
			})
			.finally(() => {});
	}

	async function loadPlans() {
		let config = {
			method: "GET",
			url: `${env.VITE_BE_API}/subscriptions?type=primary`,
		};

		axios
			.request(config)
			.then((res) => {
				// console.log(res);
				let data = res.data.sort((a, b) => {
					return a.amount - b.amount;
				});
				// console.log(data);
				plans.value = data;
			})
			.catch((error) => {
				// console.log(error);
			})
			.finally(() => {});
	}

	onMounted(() => {
		loadSubscriptions();
		loadPlans();
	});
</script>

<template>
	<div class="card">
		<div class="card-body">
			<!-- row -->
			<div class="row">
				<div class="offset-xl-2 col-xl-8 offset-lg-2 col-lg-8 col-12">
					<!-- heading -->
					<div class="text-center mb-8">
						<h1 class="display-6 mb-3 fw-bold">Select a plan</h1>
						<p class="lead small px-md-14">
							We make a special plan for everyone. Don't hesitate
							to contact support for a special one for you.
						</p>
					</div>
				</div>
				<PlanVue
					v-if="subscription === null"
					v-for="plan in plans"
					:plan="plan"
					:subs="subscriptions"
				></PlanVue>
				<PlanVue
					v-else-if="subscription.status !== 'active'"
					:plan="subscription.subscription"
					:subs="subscriptions"
				></PlanVue>
			</div>
			<div
				v-if="plans.length === 0"
				class="d-flex align-items-center justify-content-center fs-5 text-muted"
			>
				No plans
			</div>
		</div>
	</div>
</template>
