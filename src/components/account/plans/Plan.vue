<script setup>
	import axios from "axios";
	import { onMounted, ref } from "vue";
	import { user } from "@/stores/user";

	const env = import.meta.env;
	const props = defineProps({
		plan: {
			required: true,
		},
	});

	const appUser = user.getUser();

	const form = ref({
		userId: null,
		subscriptionId: null,
		length: 1,
	});

	const loading = ref(false);

	function save() {
		loading.value = true;
		form.value.userId = appUser.id;
		form.value.subscriptionId = props.plan.id;

		console.log(form.value);

		let config = {
			method: "POST",
			data: form.value,
			url: `${env.VITE_BE_API}/user-subscriptions`,
		};

		axios
			.request(config)
			.then((res) => {})
			.catch((error) => {
				console.log(error);
			})
			.finally(() => {
				loading.value = false;
			});
	}

</script>

<template>
	<div
		class="modal fade"
		:id="'plan_modal_' + plan.id"
		tabindex="-1"
		role="dialog"
		aria-labelledby="exampleModalCenterTitle"
		aria-hidden="true"
	>
		<div
			class="modal-dialog modal-dialog-cenptered modal-sm"
			role="document"
		>
			<div class="modal-content modal-xl">
				<div class="modal-body">
					<div class="text-center fs-5">
						Contact support for next steps
					</div>
				</div>
				<div class="modal-footer border-0 d-flex justify-content-center">
					<button
						type="button"
						class="btn btn-primary rounded-pill btn-sm"
						data-bs-dismiss="modal"
					>
						Close
					</button>
				</div>
			</div>
		</div>
	</div>

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
						<a
							data-bs-toggle="modal"
							:data-bs-target="'#plan_modal_' + plan.id"
							@click="save()"
							class="btn btn-primary"
							>Start Today</a
						>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
