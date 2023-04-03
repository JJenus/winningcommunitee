<script setup>
	import { onMounted, ref } from "vue";

	const swiper = ref(null);

	function start() {
		swiper.value.autoplay.start();
	}

	function stop() {
		swiper.value.autoplay.stop();
	}

	function swipe() {
		swiper.value = new Swiper(".mySwiper", {
			autoplay: {
				delay: 3000,
				disableOnInteraction: true,
			},
			effect: "cards",
			grabCursor: true,
			centeredSlides: true,
			slidesPerView: "auto",
			coverflowEffect: {
				rotate: 50,
				stretch: 0,
				depth: 100,
				modifier: 1,
				slideShadows: true,
			},
			// pagination: {
			// 	el: ".swiper-pagination",
			// 	clickable: false,
			// },
		});
	}

	onMounted(() => {
		swipe();
	});
</script>

<template>
	<div
	id="swiper-ttag"
		class="swiper mySwiper rounded-cs"
		@mouseleave="start()"
		@mouseenter="stop()"
	>
		<div class="swiper-wrapper">
			<div class="swiper-slide">
				<div
					class="h-100 w-100 fw-bold text-danger d-flex align-items-center justify-content-center flex-column"
				>
					<div class="mb-3 text-center mb-3">
						<div class="mb-0 h5 fw-bold">Football</div>
						<small class="m-0">Wins</small>
					</div>
					<div class="position-relative text-center">
						<h1 class="display-1 fw-bold d-inline">100</h1>
						<small class="position-absolute top-0 mt-3 fs-4 fw-bold"
							><i class="bi bi-check-circle-fill"></i
						></small>
						<div
							class="position-relative mt-3 d-flex align-items-center justify-content-center"
						>
							<i class="fa-solid fa-futbol display-1"></i>
						</div>
					</div>
				</div>
			</div>
			<div class="swiper-slide">
				<div
					class="h-100 w-100 fw-bold d-flex align-items-center justify-content-center flex-column"
				>
					<div class="mb-3 text-center mb-3">
						<div class="mb-0 h5 fw-bold">Basketball</div>
						<small class="m-0">Baskets</small>
					</div>
					<div class="position-relative text-center">
						<h1 class="display-1 fw-bold d-inline">108</h1>
						<small class="position-absolute top-0 mt-3 fs-4 fw-bold"
							><i class="bi bi-check-circle-fill"></i
						></small>
						<div
							class="position-relative mt-3 d-flex align-items-center justify-content-center"
						>
							<i class="fa-solid fa-basketball display-1"></i>
						</div>
					</div>
				</div>
			</div>
			<div class="swiper-slide">
				<div
					class="h-100 w-100 d-flex text-dark fw-bold align-items-center justify-content-center flex-column"
				>
					<div class="mb-3 text-center mb-3">
						<div class="mb-0 h5 fw-bold">American Football</div>
						<small class="m-0">Touchdowns</small>
					</div>
					<div class="position-relative text-center">
						<h1 class="display-1 fw-bold d-inline">109</h1>
						<small class="position-absolute top-0 mt-3 fs-4 fw-bold"
							><i class="bi bi-check-circle-fill"></i
						></small>
						<div
							class="position-relative mt-3 d-flex align-items-center justify-content-center"
						>
							<i
								
								class="fa-solid fa-football display-1"
							></i>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="swiper-pagination"></div>
	</div>
</template>

<style scoped>
	#swiper-ttag {
		width: 100%;
		height: 380px;
	}

	@media (min-width: 576px) {
		#swiper-ttag {
			width: 75%;
			height: 400px;
		}
	}

	@media (min-width: 768px) {
		#swiper-ttag {
			width: 60%;
			height: 450px;
		}
	}

	#swiper-ttag .swiper-slide {
		display: flex;
		align-items: center;
		justify-content: center;
		border-radius: 18px;
		color: #fff;
	}
	#swiper-ttag .swiper-slide:nth-child(1) {
		background-color: #2a727d;
		background-image: url("https://cdn.vox-cdn.com/thumbor/kjAPrPMf7sRrWqxwrBjuh6_VjWI=/0x0:1200x800/1200x800/filters:focal(495x127:687x319)/cdn.vox-cdn.com/uploads/chorus_image/image/69791363/MessiRonaldo_Getty_AP_Ringer.0.jpeg");
		/* For messi */
		/* https://i.scdn.co/image/ab67616d0000b27377621498fd1995b66cced3c0  */
		background-size: cover;
		height: 100%;
		overflow: hidden;
		background-repeat: no-repeat;
	}

	#swiper-ttag .swiper-slide:nth-child(2) {
		background-color: #eeb12d;
		background-image: url("https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/62068c85454667.5d7bfbdea9a57.png");
		background-size: cover;
		height: 100%;
		overflow: hidden;
		background-repeat: no-repeat;
	}

	#swiper-ttag .swiper-slide:nth-child(3n) {
		background-color: #ef4430;
		background-image: url("https://ae01.alicdn.com/kf/H033cf897292547c58cc6515606942ba1w/JERRY-RICE-G-O-A-T-49ER-T-shirt-CUSTOM-DESIGN-RARE-ART-FULL-FRONT-OF.jpg");
		background-size: cover;
		height: 100%;
		overflow: hidden;
		background-repeat: no-repeat;
		/* color: #E7422E; */
	}
</style>
