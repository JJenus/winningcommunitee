<script setup>
	import { onMounted, ref } from "vue";

	const props = defineProps({
		plan: {
			required: true,
		},
	});

	onMounted(() => {
		if (props.plan.paymentLink) {
			console.log(props.plan.paymentLink);
			setTimeout(() => {
				paypal
					.HostedButtons({
						hostedButtonId: props.plan.paymentLink,
					})
					.render(`#paypal-container-${props.plan.paymentLink}`);
			}, 2000);
		}
	});
</script>

<template>
	<div class="col">
		<!-- Card -->
		<div class="card mb-3 shadow-lg h-100">
			<!-- Card body -->
			<div
				class="h-100 border-top border-6 border-bottom rounded-3 border-dark-primary my-1 border-3"
			>
				<div class="p-5">
					<div class="mb-5">
						<h3 class="fw-bold">{{ plan.title }}</h3>
						<p class="mb-0">
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

						<div :id="`paypal-container-${plan.paymentLink}`"></div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
