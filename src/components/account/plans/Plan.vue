<script setup>
	import axios from "axios";
	import { onMounted, ref } from "vue";
	import { user } from "@/stores/user";
	import { alert } from "../../../stores/utility";

	const env = import.meta.env;
	const props = defineProps({
		plan: {
			required: true,
		},
		subs: {
			type: Array,
			required: true,
		},
	});

	const appUser = user.getUser();

	const form = ref({
		userId: null,
		subscriptionId: null,
		length: 1,
	});

	let chat = null;
	let arrow = null;

	const loading = ref(false);

	function active() {
		return props.subs.find((sub) => {
			return props.plan.id == sub.subscription.id;
		});
	}

	function save() {
		// // console.log(props.subs);
		if (!active()) {
			return;
		}

		loading.value = true;
		form.value.userId = appUser.id;
		form.value.subscriptionId = props.plan.id;

		// // console.log(form.value);

		const amount = props.plan.amount.replace("$", "");

		const userMessage = `Hello ${appUser.name}, confirm your subscription request.`;
		const planMessage = `SUBSCRIPTION REQUEST \n\nPlan: ${props.plan.title} \nPrice: $${amount}`;

		// // console.log(userMessage, planMessage);

		let config = {
			method: "POST",
			data: form.value,
			url: `${env.VITE_BE_API}/user-subscriptions`,
		};

		axios
			.request(config)
			.then((res) => {
				alert.success("Success", "Chat support to make payment");
				// window.Tawk_API.sendMessage(userMessage);
				// window.Tawk_API.sendMessage("planMessage");
				$crisp.push([
					"do",
					"message:send",
					["text", `${planMessage}`],
				]);

				setTimeout(() => {
					// // console.log(res.data);
					$crisp.push(["do", "chat:open"]);
				}, 4000);
			})
			.catch((error) => {
				// // console.log(error);
				alert.success("Success", "Chat support to make payment");
			})
			.finally(() => {
				loading.value = false;
			});
	}

	onMounted(() => {});
</script>

<template>
	<div class="col-lg-4 col-md-6 col-12">
		<!-- Card -->
		<div class="card mb-3 border border-top-0">
			<!-- Card body -->
			<div
				class="border-top border-6 border-bottom rounded-3 border-dark-primary"
			>
				<div class="p-5">
					<div class="mb-5">
						<h3 class="fw-bold">{{ plan.title }}</h3>
						<p class="mb-0">
							Access all
							<span class="text-dark fw-medium">
								{{ plan.description }}
							</span>
							Renewed {{ plan.duration }}.
						</p>
						<h1 class="mb-3 fw-bold mt-5">
							${{ plan.amount }}
							<span class="fs-5 text-muted fw-normal"
								>/{{ plan.duration }}</span
							>
						</h1>

						<button
							:class="loading ? 'disabled' : ''"
							@click="save()"
							class="btn btn-primary"
						>
							<span
								v-if="loading"
								class="spinner-border spinner-border-sm"
							></span>
							<span v-else>Start</span>
						</button>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
