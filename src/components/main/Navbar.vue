<script setup>
	import { onMounted, ref } from "vue";
	import { useRoute, useRouter } from "vue-router";
	import Banner from "./Banner.vue";

	const env = import.meta.env;

	const router = useRouter();
	const route = useRoute();

	let path = ref("");

	const navs = [
		{
			name: "Home",
			icon: "bi bi-house",
			path: "/home",
		},
		// {
		// 	name: "Live",
		// 	icon: "bi bi-broadcast",
		// 	path: "/livescores",
		// },
		{
			name: "About",
			icon: "bi bi-question-circle",
			path: "/about",
		},
		{
			name: "Contact",
			icon: "bi bi-headset",
			path: "/contact-us",
		},
	];

	onMounted(async () => {
		await router.isReady();
		path.value = route.path;
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
	<div
		class="position-fixed bottom-0 d-md-none left-0 w-100 bg-dark"
		style="z-index: 3000"
	>
		<div class="row align-items-center bg-dark">
			<div class="col-md-12 py-2 py-xl-0">
				<div
					class="text-center text-xl-center px-md-8 px-lg-19 px-xl-0"
				>
					<!-- Header message  -->
					<!-- List -->
					<div class="">
						<div
							class="px-2 d-flex justify-content-center flex-wrap"
						>
							<a
								v-for="nav in navs"
								:href="nav.path"
								class="btn fw-bold m-1 m-md-2 flex-even"
								:class="
									path === nav.path
										? 'btn-warning'
										: 'btn-light'
								"
							>
								<div class="d-md-flex align-items-center">
									<div class="me-md-2">
										<i
											:class="nav.icon"
											class="fs-3 fw-bold"
										></i>
									</div>
									<!-- <span class="fs-6">{{ nav.name }}</span> -->
								</div>
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<style>
	.flex-even {
		flex: 1;
	}
</style>
