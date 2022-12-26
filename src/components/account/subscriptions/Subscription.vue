<script setup>
    import moment from "moment";

	const props = defineProps({
		subscription: {
			required: true,
		},
	});

	function status() {
		return props.subscription.status || "pending";
	}

	function statusColor() {
		if (
			props.subscription.status === null ||
			props.subscription.status === "pending"
		) {
			return "bg-info";
		}

		if (props.subscription.status === "active") {
			return "bg-success";
		}
	}

	function startDate() {}

	function date(strDate) {
        return moment(strDate).format("MMM Do, YYYY")
    }
</script>

<template>
	<div class="border-bottom pt-0 pb-5 mb-3">
		<div class="row mb-4">
			<div class="col-lg-6 col-md-8 col-7 mb-2 mb-lg-0">
				<span class="d-block">
					<span class="h4">{{
						subscription.subscription.title
					}}</span>
					<span :class="statusColor()" class="badge bg-success ms-2">
						{{ status() }}
					</span>
				</span>
				<p class="mb-0 fs-6">
					Subscription ID: #100A{{ subscription.id }}PAXY
				</p>
			</div>
			<div class="col-lg-3 col-md-4 col-5 mb-2 mb-lg-0">
				<!-- Custom Switch -->
				<span>Auto Renewal</span>
				<div class="form-check form-switch">
					<input
						type="checkbox"
						class="form-check-input"
						id="customSwitch1"
						
					/>
					<label class="form-check-label" for="customSwitch1"></label>
				</div>
			</div>
			<div
				class="col-lg-3 col-md-12 col-12 d-lg-flex align-items-start justify-content-end"
			>
				<a href="#" class="btn btn-outline-primary d-none btn-sm"
					>Change Plan</a
				>
			</div>
		</div>
		<!-- Pricing data -->
		<div class="row">
			<div class="col-lg-3 col-md-3 col-6 mb-2 mb-lg-0">
				<span class="fs-6">Started On</span>
				<h6 class="mb-0">{{ date(subscription.createdAt) }}</h6>
			</div>
			<div class="col-lg-3 col-md-3 col-6 mb-2 mb-lg-0">
				<span class="fs-6">Price</span>
				<h6 class="mb-0 capitalize">
					{{ subscription.subscription.duration }}
				</h6>
			</div>
			<div class="col-lg-3 col-md-3 col-6 mb-2 mb-lg-0">
				<span class="fs-6">Access</span>
				<h6 class="mb-0">All</h6>
			</div>
			<div class="col-lg-3 col-md-3 col-6 mb-2 mb-lg-0">
				<span class="fs-6">Expiry Date</span>
				<h6 class="mb-0">{{ date(subscription.expiresAt) }}</h6>
			</div>
		</div>
	</div>
</template>
