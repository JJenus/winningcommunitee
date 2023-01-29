<script setup>
	import { onMounted, ref } from "vue";
	import { useRoute, useRouter } from "vue-router";
	import Banner from "./Banner.vue";

	const env = import.meta.env;

	const router = useRouter();
	const route = useRoute();

	let path = ref("");

	onMounted(async () => {
		await router.isReady();
		path.value = route.name;
	});
</script>

<style>
	@media (max-width: 576px) {
		.float-sm {
			bottom: 0 !important;
			right: 0 !important;
			margin-bottom: 10px !important;
			margin-right: 10px !important;
		}
	}
</style>

<template>
	<div class="bg-dark pt-xl-16 pt-lg-10 pt-4">
		<div class="container px-4 px-lg-0">
			<Banner></Banner>
			<!-- Hero Section -->
			<div class="row align-items-center">
				<div class="col-md-12 py-2 py-xl-0">
					<div
						class="mb-4 text-center text-xl-center px-md-8 px-lg-19 px-xl-0"
					>
						<!-- Header message  -->
						<!-- List -->
						<div class="sticky-top mx-n4">
							<div
								class="tab d-flex justify-content-center flex-wrap"
							>
								<a
									href="/home"
									class="btn fw-bold m-1 m-md-2"
									:class="
										path === 'home'
											? 'btn-warning'
											: 'btn-primary'
									"
								>
									<div class="d-md-flex align-items-center">
										<div class="me-md-2">
											<i class="bi bi-house fs-3"></i>
										</div>
										<span class="fs-6 d-md-none">Home</span>
										<span class="fs-5 d-none d-md-inline"
											>Home</span
										>
									</div>
								</a>

								<a
									href="/livescores"
									class="btn fw-bold m-1 m-md-2"
									:class="
										path === 'livescores'
											? 'btn-warning'
											: 'btn-primary'
									"
								>
									<div class="d-md-flex align-items-center">
										<div class="me-md-2">
											<i class="bi bi-broadcast fs-3"></i>
										</div>
										<span class="fs-6 d-md-none">Live</span>
										<span class="fs-5 d-none d-md-inline"
											>Live Scores</span
										>
									</div>
								</a>

								<a
									href="/about"
									class="btn fw-bold m-1 m-md-2"
									:class="
										path === 'about'
											? 'btn-warning'
											: 'btn-primary'
									"
								>
									<div class="d-md-flex align-items-center">
										<div class="me-md-2">
											<i
												class="bi bi-question-circle fs-3"
											></i>
										</div>
										<span class="fs-6 d-md-none"
											>About</span
										>
										<span class="fs-5 d-none d-md-inline"
											>About</span
										>
									</div>
								</a>

								<a
									href="/contact-us"
									class="btn fw-bold m-1 m-md-2"
									:class="
										path === 'contactus'
											? 'btn-warning'
											: 'btn-primary'
									"
								>
									<div class="d-md-flex align-items-center">
										<div class="me-md-2">
											<i class="bi bi-headset fs-3"></i>
										</div>
										<span class="fs-6 d-md-none"
											>Contact</span
										>
										<span class="fs-5 d-none d-md-inline"
											>Contact</span
										>
									</div>
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
