<script setup>
	const props = defineProps({
		plan: {
			required: true,
		},
	});
</script>

<template>
	<div class="col-lg-4 col-md-12 col-12">
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
						<a href="#" class="btn btn-primary">Start Today</a>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
