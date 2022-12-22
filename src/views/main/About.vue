<script setup>
	import axios from "axios";
	import { onMounted, ref } from "vue";
	import { util, storage } from "@/stores/utility";

	//CODES
	const env = import.meta.env;

	// OLD VARS
	const predictions = ref([]);
	const loadingSuperPicks = ref(true);
	let rawSuperPicks = [];
	const vipPicks = ref([]);
	const loadingVipPicks = ref(true);

	// NEW VARS
	const faqs = ref([]);

	function loadPredictions() {
		let prob = 0.8;
		do {
			predictions.value = getSuperPicks(prob).splice(0, 10);
			prob = Number(util.format(prob - 0.01, 2, ".", ","));
		} while (predictions.value.length < 10 && prob > 0.7);

		storage.save("vip", predictions.value);
	}

	function getSuperPicks(per = 0.78) {
		return rawSuperPicks.filter((e) => {
			return Number(e.probability) === per;
		});
	}

	async function fetchVipPicks() {
		let config = {
			method: "GET",
			url: `${env.VITE_BE_API}/predictions/vip-picks`,
		};

		const data = storage.reload("vip");

		if (data.length > 0) {
			vipPicks.value = data;
			loadingVipPicks.value = false;
			return;
		}

		axios
			.request(config)
			.then((res) => {
				let data = res.data;
				console.log(data);
				vipPicks.value = data;
			})
			.catch((error) => {
				console.log(error);
			})
			.finally(() => {
				loadingVipPicks.value = false;
			});
	}

	async function fetchPredictions() {
		let config = {
			method: "GET",
			url: `${env.VITE_BE_API}/predictions/super-picks`,
		};

		const data = storage.reload("superpicks");

		if (data.length > 0) {
			predictions.value = data;
			loadingSuperPicks.value = false;
			return;
		}

		axios
			.request(config)
			.then((response) => {
				let data = response.data;
				rawSuperPicks = data;
				loadPredictions();
			})
			.catch(function (error) {
				console.log(error);
			})
			.finally(() => {
				loadingSuperPicks.value = false;
			});
	}

	function totalSuperOdd() {
		let odd = predictions.value?.reduce((p, n) => p * n.odd, 1);
		return util.format(odd, 2, ".", ",");
	}

	function loadFAQs() {
		let config = {
			method: "GET",
			url: `${env.VITE_BE_API}/faqs/`,
		};

		axios
			.request(config)
			.then((response) => {
				console.log(response);
				faqs.value = response.data;
			})
			.catch(function (error) {
				console.log(error);
			})
			.finally(() => {});
	}

	onMounted(() => {
		loadFAQs();
	});
</script>

<template>
	<div class="bg-dark pb-4">
		<div class="container">
			<div class="py-8 py-lg-18">
				<div class="container">
					<div class="row mb-8 justify-content-center">
						<div class="col-lg-6 col-md-12 col-12 text-center">
							<!-- caption -->
							<span
								class="text-primary mb-3 d-block text-uppercase fw-semi-bold ls-xl"
								>Need to Know</span
							>
							<h2 class="mb-2 text-white display-4 fw-bold">
								Frequently Asked Questions.
							</h2>
							<p class="lead">
								All frequently asked questions are provided
								here. For further consultations please contact
								us via our support channels.
							</p>
						</div>
					</div>
					<!-- row -->
					<div class="row justify-content-center">
						<div class="col-lg-6 col-md-8 col-12">
							<div
								class="accordion accordion-flush"
								id="accordionExample"
							>
								<div v-for="(faq, index) in faqs">
									<div
										class="border-bottom py-3"
										id="headingOne"
									>
										<h3 class="mb-0 fw-bold">
											<a
												href="#"
												class="d-flex align-items-center text-white text-decoration-none"
												data-bs-toggle="collapse"
												:data-bs-target="'#collapse-'+faq.id"
												aria-expanded="true"
												:aria-controls="'collapse-'+faq.id"
											>
												<span class="me-auto">
													{{ faq.title }}
												</span>
												<span
													class="collapse-toggle ms-4"
												>
													<i
														class="fe fe-plus text-primary"
													></i>
												</span>
											</a>
										</h3>
									</div>
									<div
										:id="'collapse-'+faq.id"
										:class="index==0? 'show':''"
										class="collapse"
										:aria-labelledby="faq.title"
										data-bs-parent="#accordionExample"
										style=""
									>
										<div class="py-3 fs-4">
											{{ faq.description }}
										</div>
									</div>
								</div>
							</div>

							<!-- Exluded -->
							<div class="mt-10 text-center">
								<a class="btn btn-outline-white"
									>More questions? Visit the
									<span class="text-primary"
										>Live Chat.</span
									></a
								>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
