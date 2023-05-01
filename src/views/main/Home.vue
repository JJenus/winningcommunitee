<script setup>
	import axios from "axios";
	import { onMounted, ref } from "vue";
	import { storage } from "@/stores/utility";
	import Testimonials from "../../components/main/Testimonials.vue";
	import Banner from "../../components/main/Banner.vue";
	import WonMarque from "@/components/main/WonMarque.vue";
	import SwiperTag from "../../components/main/SwiperTag.vue";

	//CODES
	const env = import.meta.env;

	// OLD VARS
	const predictions = ref([]);
	let loadingPredictions = ref(true);

	// NEW VARS
	const testimonials = ref([]);

	async function fetchPredictions() {
		const data = storage.reload("free_picks");

		if (data.length > 0) {
			predictions.value = data;
			loadingPredictions.value = false;
			return;
		}

		let config = {
			method: "GET",
			url: `${env.VITE_BE_API}/predictions/free-picks`,
		};

		axios
			.request(config)
			.then((res) => {
				// // console.log(res);
				let data = res.data;
				predictions.value = data;
				storage.save("free_picks", data);
			})
			.catch((error) => {
				// console.log(error);
			})
			.finally(() => {
				loadingPredictions.value = false;
			});
	}

	async function loadTestifiers() {
		let config = {
			method: "GET",
			url: `${env.VITE_BE_API}/testimonials`,
		};

		axios
			.request(config)
			.then((res) => {
				// // console.log(res);
				let data = res.data;
				testimonials.value = data;
			})
			.catch((error) => {
				// console.log(error);
			})
			.finally(() => {});
	}

	onMounted(() => {
		loadTestifiers();
	});
</script>

<template>
	<div class="bg-dark pb-0">
		<div class="container-fluid px-4 pt-4 px-lg-0">
			<div class="pt-xl-16 pt-lg-10 pt-4">
				<div class="row justify-content-center">
					<div class="col-md-6">
						<Banner></Banner>
					</div>

					<div class="col-md-5 text-light">
						<h5 class="h3 d-none text-light text-center d-none">Coverage</h5>
						<div class="">
							<SwiperTag />
						</div>
					</div>
				</div>
			</div>

			<div class="row text-light mb-4">
				<div class="offset-xl-1 col-xl-10 col-md-12 col-12">
					<div class="row text-center">
						<!-- col -->
						<div class="col-md-12 px-lg-10 mb-8 mt-6 text-white">
							<h2 class="h1 fw-bold mt-3 text-white">
								How It Works
							</h2>
						</div>
					</div>
					<div class="row gy-6">
						<!-- col -->

						<div class="col-md-4 col-12">
							<div class="text-center">
								<!-- icon -->

								<div
									class="icon-shape icon-lg border border-white border-2 fs-3 rounded-circle mb-4 process-line text-white smooth-shadow-md"
								>
									1
								</div>
								<!-- heading -->

								<h3 class="text-white">Click on Sign Up</h3>
								<!-- text -->

								<p class="mb-0 px-4">
									Fill in your details, make sure all your
									details are correct.
								</p>
							</div>
						</div>
						<!-- col -->

						<div class="col-md-4 col-12">
							<div class="text-center">
								<!-- icon -->

								<div
									class="icon-shape icon-lg border border-white border-2 fs-3 rounded-circle mb-4 process-line text-white smooth-shadow-md"
								>
									2
								</div>
								<!-- heading -->

								<h3 class="text-white">Subscribe To a Plan</h3>
								<!-- text -->

								<p class="mb-0 px-2">
									Choose one of our optional plans to gain
									more from this amazing community.
								</p>
							</div>
						</div>
						<!-- col -->

						<div class="col-md-4 col-12">
							<div class="text-center">
								<!-- icon -->

								<div
									class="icon-shape icon-lg border border-white border-2 fs-3 rounded-circle mb-4 text-white smooth-shadow-md"
								>
									3
								</div>
								<!-- heading -->

								<h3 class="text-white">Start Winning</h3>
								<!-- text -->

								<p class="mb-0 px-3">
									Contact support via our live chat channel
									and gain full access to our services.
								</p>
							</div>
						</div>
						<!-- button -->

						<div class="col-12 mt-8 text-center">
							<button
								data-bs-toggle="modal"
								data-bs-target="#authModal"
								class="btn btn-primary"
							>
								Sign Up Now
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>

		<div class="py-10">
			<!-- Container -->
			<div class="container-fluid">
				<div class="mb-4 pb-3">
					<h5 class="h1 text-center mb-3 text-light">
						The community
					</h5>
					<div>
						<WonMarque></WonMarque>
					</div>
				</div>
				<div class="row">
					<div class="offset-xl-2 col-xl-8 col-12 text-light">
						<!-- Row -->
						<div class="row mb-4">
							<div class="text-center col-12 mb-8 text-light">
								<!-- Heading -->
								<h2 class="display-4 fw-bold text-light">
									The community loves it
								</h2>
								<!-- Para -->
								<p class="h2 text-muted">
									Optimized for a great user experience.
								</p>
								<p class="small">
									100+ people are already signed up
								</p>
							</div>
							<div class="col-md-12 col-12">
								<Testimonials
									:testimonials="testimonials"
								></Testimonials>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<style>
	/* .st-h {
		min-height: 200px;
		max-height: 200px;
		overflow-y: auto;
		-ms-overflow-style: none; /* Internet Explorer 10+ /
		scrollbar-width: none; /* Firefox /
	} */
	.st-h::-webkit-scrollbar {
		display: none; /* Safari and Chrome */
	}
</style>
