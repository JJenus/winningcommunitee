<script setup>
	import axios from "axios";
	import { onMounted, ref } from "vue";
	import PlanVue from "@/components/account/plans/Plan.vue";

    const env = import.meta.env;
    const plans = ref([]);

	async function loadPlans() {
		let config = {
			method: "GET",
			url: `${env.VITE_BE_API}/subscriptions?type=primary`,
		};

		axios
			.request(config)
			.then((res) => {
				console.log(res);
				let data = res.data;
				plans.value = data;
			})
			.catch((error) => {
				console.log(error);
			})
			.finally(() => {});
	}

	onMounted(() => {
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
						<h1 class="display-4 mb-3 fw-bold">A plan for you</h1>
						<p class="lead small px-md-14">
							We make a special plan for everyone. Don't hesitate
							to contact support for a special one for you.
						</p>
					</div>
				</div>
				<PlanVue v-for="plan in plans" :plan="plan"></PlanVue>
			</div>
            <div v-if="plans.length === 0" class="d-flex align-items-center justify-content-center fs-2">
                No plans
            </div>
		</div>
	</div>
</template>
