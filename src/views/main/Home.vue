<script setup>
	import axios from "axios";
	import { onMounted, ref } from "vue";
	import { storage } from "@/stores/utility";

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
				console.log(res);
				let data = res.data;
				predictions.value = data;
				storage.save("free_picks", data);
			})
			.catch((error) => {
				console.log(error);
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
				console.log(res);
				let data = res.data;
				testimonials.value = data;
			})
			.catch((error) => {
				console.log(error);
			})
			.finally(() => {});
	}

	onMounted(() => {
		loadTestifiers();
	});

	// (function (w, d, s, o, f, js, fjs) {
	// 	w["fsStandingsEmbed"] = o;
	// 	w[o] =
	// 		w[o] ||
	// 		function () {
	// 			(w[o].q = w[o].q || []).push(arguments);
	// 		};
	// 	(js = d.createElement(s)), (fjs = d.getElementsByTagName(s)[0]);
	// 	js.id = o;
	// 	js.src = f;
	// 	js.async = 1;
	// 	fjs.parentNode.insertBefore(js, fjs);
	// })(window, document, "script", "mw", "assets/js/standings.js");

	// mw("params", { leagueID: 7665, elementID: "fb-standings" });
	// mw("params", { leagueID: 7704, elementID: "fs-standings" });
</script>

<template>
	<div class="bg-dark pb-4">
		<div class="container px-4 pt-4 px-lg-0">
			<div class="row text-light mb-4">
				<div class="offset-xl-1 col-xl-10 col-md-12 col-12">
					<div class="row text-center">
						<!-- col -->
						<div class="col-md-12 px-lg-10 mb-8 mt-6 text-white">
							<span
								class="text-uppercase text-white text-white fw-semi-bold ls-md"
								>Process</span
							>
							<!-- heading -->
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
									Fill in the details of the job be sure to
									include your location restrictions if you
									have em!
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
									The base price for a job listing on Geeks is
									$29 per month. Choose one of our optional
									upgrades to gain more visibility to your
									listing.
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
									Preview your listing and once you are ready
									to post it you can add your billing
									information.
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

		<div class="py-8 py-lg-18 bg-">
			<div class="container">
				<div class="row mb-8 justify-content-center">
					<div class="col-lg-6 col-md-12 col-12 text-center">
						<!-- caption -->
						<h2 class="display-4 fw-bold text-light">
							The community loves it
						</h2>
						<!-- Para -->
						<p class="h2 text-muted">
							Optimized for a great user experience.
						</p>
						<p class="lead">100+ people are already signed up</p>
					</div>
				</div>
				<!-- Testimonial -->
				<div class="row">
					<div v-for="testimony in testimonials" class="col-md-6 col-12 mb-4 mb-lg-0">
						<!-- Card -->
						<div class="card shadow-lg">
							<!-- Card body -->
							<div class="card-body p-8 text-center">
								<i
									class="bi bi-quote text-light-primary lh-1 fs-1"
								></i>
								<p class="lead text-dark mt-3">
									{{ testimony.testimony }}
								</p>
							</div>
							<!-- Card Footer -->
							<div
								class="card-footer bg-primary text-center border-top-0"
							>
								<div class="mt-n8">
									<img
										src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
										alt=""
										class="rounded-circle border-primary avatar-xl border border-4"
									/>
								</div>
								<div class="mt-2 text-white">
									<h3 class="text-white mb-0">
										{{ testimony.userName }}
									</h3>
									<p class="text-white-50 d-none mb-1">
										Joined on February
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
