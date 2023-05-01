<script setup>
	import axios from "axios";
	import { onMounted, ref } from "vue";
	import { user } from "@/stores/user";

	const env = import.meta.env;
	const subscriptions = ref([]);

	function status(stat) {
		if (!stat) return "pending";
		return stat;
	}

	async function loadSubscriptions() {
		let config = {
			method: "GET",
			url: `${env.VITE_BE_API}/user-subscriptions/${user.getUser().id}`,
		};

		axios
			.request(config)
			.then((res) => {
				// console.log(res.data);
				let data = res.data;
				subscriptions.value = data;
			})
			.catch((error) => {
				// console.log(error);
			})
			.finally(() => {});
	}

	function openTiidio() {
		window.tidioChatApi.open();
	}

	onMounted(() => {
		loadSubscriptions();
	});
</script>

<template>
	<div class="card mb-3">
		<!-- Card header -->
		<div class="card-header">
			<h3 class="mb-0">Games</h3>
		</div>
		<!-- Card body -->
		<div class="card-body d-flex justify-content-center">
			<h5 v-if="subscriptions.length > 0" class="text-info">
				Please contact support to get access
			</h5>
			<h5 v-else class="">
				Click on subscriptions on the menu and kindly subscribe to a
				plan that suits you and have full access to our games.
			</h5>
		</div>
	</div>

	<div class="row mt-4">
		<div class="col-xl-12 stretch-card grid-margin">
			<div class="card">
				<div class="card-body">
					<div class="row">
						<div class="col-7">
							<h5>Subscriptions</h5>
							<p class="text-muted">My Subscriptions</p>
						</div>
						<div class="col-5 text-md-right">
							<a
								role="button"
								type="button"
								@click="openTiidio()"
								class="btn mb-3 mb-sm-0 btn-sm btn-primary font-weight-normal"
							>
								<i class="bi bi-chat me-2"></i>
								Contact support
							</a>
						</div>
					</div>
					<div class="row g-4 align-items-stretched">
						<div v-for="sub in subscriptions" class="col-md-6">
							<div class="card mb-3 mb-sm-0 h-100">
								<div class="card-body py-3 px-4">
									<p class="m-0 survey-head">
										{{ sub.subscription.title }}
									</p>
									<div
										class="d-flex justify-content-between align-items-end flot-bar-wrapper"
									>
										<div>
											<h3 class="m-0 survey-value">
												${{ sub.subscription.amount }}
											</h3>
											<p
												:class="
													status(sub.status) ==
													'pending'
														? 'text-warning'
														: 'text-success'
												"
												class="m-0 mb-2"
											>
												{{ status(sub.status) }}
											</p>
											<p
												v-if="
													sub.subscription.type ==
													'personal'
												"
											>
												{{
													sub.subscription.description
												}}
											</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
