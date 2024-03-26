<script setup>
	import { onMounted, ref } from "vue";
	import { useRoute, useRouter } from "vue-router";
	import { useAuthStore } from "@/stores/auth";
	import UserDropown from "@/components/UserDropdown.vue";

	const env = import.meta.env;
	const auth = useAuthStore();
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

	const user = auth.getUser();
	console.log(user);

	const router = useRouter();
	const route = useRoute();

	let path = ref("");

	onMounted(async () => {
		await router.isReady();
		path.value = route.path;
	});
</script>
<template>
	<nav
		class="navbar navbar-expand-md fsi-4 navbar-dark is-navbar-dark position-lg-absolute w-100"
	>
		<div
			class="container-fluid px-0 d-flex align-items-center justify-content-between text-white"
		>
			<a class="navbar-brand" href="/">
				<img
					src="/assets/images/logo/logo-white.png"
					class="img-fluid d-none d-md-inline-block"
					width="270"
				/>
				<img
					src="/assets/images/logo/logo-white.png"
					class="img-fluid d-md-none"
					width="200"
				/>
			</a>

			<!-- Button -->

			<!-- Collapse -->
			<div class="collapse navbar-collapse" id="navbar-default">
				<ul class="navbar-nav mx-auto">
					<li v-for="nav in navs" class="nav-item pe-2">
						<a
							:class="
								path == nav.path
									? 'btn btn-light btn-sm px-3 py-1 rounded-pill'
									: 'nav-link'
							"
							class=""
							:href="nav.path"
							id="navbarLanding"
						>
							{{ nav.name }}
						</a>
					</li>
				</ul>
			</div>

			<div class="me-md-5">
				<button
					v-if="!user"
					data-bs-toggle="modal"
					data-bs-target="#authModal"
					class="btn btn-light btn-sm rounded-pill px-4 py-1"
				>
					Login
				</button>
				<UserDropown class="text-white" v-else></UserDropown>
			</div>
		</div>
	</nav>
</template>
