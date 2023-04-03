<script setup>
	// Import Swiper Vue.js components
	import { Swiper, SwiperSlide } from "swiper/vue";
	// import "swiper/css";
	// import "swiper/css/pagination";
	// import "swiper/css/navigation";
	import { Pagination, Navigation, Autoplay } from "swiper";
	import { util } from "@/stores/utility";

	const props = defineProps({
		testimonials: {
			required: true,
		},
	});

	function rating(rating) {
		return rating || 5;
	}

	const modules = [Pagination, Navigation, Autoplay];
</script>
<!-- <swiper
    :spaceBetween="30"
    :centeredSlides="true"
    :autoplay="{
      delay: 2500,
      disableOnInteraction: false,
    }"
    :pagination="{
      clickable: true,
    }"
    :navigation="true"
    :modules="modules"
    class="mySwiper"
  > -->
<template>
	<div class="position-relative d-none text-light px-3 px-xl-0">
		<!-- controls -->
		<div
			v-if="testimonials.length > 0"
			class="d-flex mb-2 justify-content-end"
		>
			<span
				type="button"
				class="btn btn-icon btn-sm btn-outline-light me-2 rounded-circle"
				id="prev-testimony"
			>
				<i class="fe fe-chevron-left"></i>
			</span>
			<span
				type="button"
				class="btn btn-icon btn-sm btn-outline-light rounded-circle"
				id="next-testimony"
			>
				<i class="fe fe-chevron-right"></i>
			</span>
		</div>
		<!-- slider -->
		<swiper
			:pagination="{
				type: 'progressbar',
			}"
			:modules="modules"
			:autoplay="{
				delay: 2500,
				disableOnInteraction: false,
			}"
			:navigation="{
				nextEl: '#next-testimony',
				prevEl: '#prev-testimony',
			}"
			:breakpoints="{
				'@0.00': {
					slidesPerView: 1,
					spaceBetween: 10,
				},
				'@0.75': {
					slidesPerView: 2,
					spaceBetween: 20,
				},
			}"
			class="mySwiper"
		>
			<swiper-slide v-for="testimony in testimonials">
				<div class="mt-4">
					<!-- para -->
					<span class="display-3 text-muted"
						><i class="mdi mdi-format-quote-open"></i
					></span>
					<p class="fs-3 lh-lg mb-4 pb-2 st-h ps-scroll text-light">
						"{{ testimony.testimony }}"
					</p>
					<!-- img-->
					<div class="d-flex align-items-center">
						<div>
							<img
								v-if="testimony.imgUrl"
								:src="util.resizeImg(testimony.imgUrl, 100)"
								alt=""
								class="avatar avatar-lg rounded-circle"
							/>
							<div
								v-else
								class="avatar mb-4 avatar-lg text-light rounded-circle"
							>
								<i class="bi bi-person-circle fs-1"></i>
							</div>
						</div>
						<!-- text -->
						<div class="ms-3 text-light">
							<h4 class="text-light">
								{{ testimony.userName
								}}<span class="text-info"> / </span>
								<span>
									<i
										:class="
											rating(testimony.rating) >= 1
												? 'text-warning'
												: 'text-light'
										"
										class="bi bi-star-fill me-1"
									></i>
									<i
										:class="
											rating(testimony.rating) >= 2
												? 'text-warning'
												: 'text-light'
										"
										class="bi bi-star-fill me-1"
									></i>
									<i
										:class="
											rating(testimony.rating) >= 3
												? 'text-warning'
												: 'text-light'
										"
										class="bi bi-star-fill me-1"
									></i>
									<i
										:class="
											rating(testimony.rating) >= 4
												? 'text-warning'
												: 'text-light'
										"
										class="bi bi-star-fill me-1"
									></i>
									<i
										:class="
											rating(testimony.rating) >= 5
												? 'text-warning'
												: 'text-light'
										"
										class="bi bi-star-fill"
									></i>
								</span>
							</h4>
						</div>
					</div>
				</div>
			</swiper-slide>
		</swiper>
	</div>
</template>

<style scoped></style>
