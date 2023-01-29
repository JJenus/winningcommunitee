<script setup>
	// Import Swiper Vue.js components
	import { Swiper, SwiperSlide } from "swiper/vue";
	import "swiper/css";
	import "swiper/css/pagination";
	import "swiper/css/navigation";
	import { Pagination, Navigation, Autoplay } from "swiper";
	import Typed from "typed.js";
	import { onMounted, ref } from "vue";

	// const props = defineProps({
	// 	testimonials: {
	// 		required: true,
	// 	},
	// });

	var options = {
		strings: [
			"A community to built trust.",
			"Losing <strong class='text-danger'>is not</strong> an option.",
            "The <strong class='text-success'>Arena of Success</strong>"
		],
		// Optionally use an HTML element to grab strings from (must wrap each string in a <p>)
		stringsElement: null,
		// typing speed
		typeSpeed: 90,
		// time before typing starts
		startDelay: 1200,
		// backspacing speed
		backSpeed: 20,
		// time before backspacing
		backDelay: 500,
		// loop
		loop: true,
		// false = infinite
		loopCount: 5,
		// show cursor
		showCursor: false,
		// character for cursor
		cursorChar: "|",
		// attribute to type (null == text)
		attr: null,
		// either html or text
		contentType: "html",
	};

	const typed = ref(null);

	const modules = [Pagination, Navigation, Autoplay];

	onMounted(() => {
		typed.value = new Typed("#typed", options);
	});
</script>

<template>
	<!-- slider -->
	<swiper
		:pagination="{}"
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
			// '@0.75': {
			// 	slidesPerView: 2,
			// 	spaceBetween: 20,
			// },
		}"
		class="mySwiper"
	>
		<swiper-slide>
			<!-- CONTENT -->
			<div class="text-center">
				<!-- Caption -->
				<h1
					class="display-5 display-md-2 fw-bold mb-3 text-white ls-sm"
				>
					Winning
					<span class="text-warning"
						><span class="text-light">-</span> Community</span
					>
				</h1>
				<p
					style="height: 10px"
					class="mb-6 lead text-white-50 pe-lg-6"
					id="typed"
				></p>
			</div>
		</swiper-slide>
	</swiper>
</template>

<style>
	#typed::after {
		content: "|";
		display: inline;
		-webkit-animation: blink 0.7s infinite;
		-moz-animation: blink 0.7s infinite;
		animation: blink 0.7s infinite;
	}

	/*Removes cursor that comes with typed.js*/
	.typed-cursor {
		opacity: 0;
		display: none;
	}
	/*Custom cursor animation*/
	@keyframes blink {
		0% {
			opacity: 1;
		}
		50% {
			opacity: 0;
		}
		100% {
			opacity: 1;
		}
	}
	@-webkit-keyframes blink {
		0% {
			opacity: 1;
		}
		50% {
			opacity: 0;
		}
		100% {
			opacity: 1;
		}
	}
	@-moz-keyframes blink {
		0% {
			opacity: 1;
		}
		50% {
			opacity: 0;
		}
		100% {
			opacity: 1;
		}
	}
</style>
