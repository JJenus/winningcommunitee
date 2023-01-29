<script setup>
	const props = defineProps({
		winner: { required: true },
	});
</script>

<template>
	<div
		class="card me-3 border-warning border border-2 bg-dark"
	>
		<div
			class="d-flex justify-content-between align-items-center p-2 border-warning"
		>
			<div
				class="d-flex align-items-center fs-6 justify-content-center flex-column mb-0"
			>
				<i class="bi bi-check2-circle fs-5 text-dark-success"></i>
				<span>Won</span>
			</div>
			<div class="d-flex">
				<div class="ms-3">
					<h4 class="mb-1 text-light fs-5">${{ winner.amount }}</h4>
					<p class="mb-1 fs-6 pe-2 text-truncate boxed">
						{{ winner.name }}
					</p>
				</div>
			</div>
		</div>
	</div>
</template>

<style scoped>
	.boxed {
		max-width: 100px;
		min-width: 100px;
	}
</style>