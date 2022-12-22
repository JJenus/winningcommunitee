<script setup>
	import { useAuthStore } from "@/stores/auth";
	import UserDropown from "@/components/UserDropdown.vue";

	const env = import.meta.env;
	const auth = useAuthStore();

	const user = auth.getUser();
	console.log(user)
</script>
<template>
	<nav
		class="navbar navbar-expand-lg navbar-dark is-navbar-dark position-lg-absolute w-100"
	>
		<div class="container px-0 d-flex justify-content-between text-white">
			<a class="navbar-brand" href="/">
				<img
					src="/assets/images/logo/logo.png"
					class="img-fluid d-none d-md-inline-block"
					alt=""
				/>
				<img
					width="200"
					src="/assets/images/logo/logo.png"
					class="img-fluid d-md-none"
					alt=""
				/>
			</a>

			<button
				v-if="!user"
				data-bs-toggle="modal"
				data-bs-target="#authModal"
				class="btn btn-primary btn-sm rounded-pill"
			>
				Login
			</button>
			<UserDropown class="text-white" v-else></UserDropown>
		</div>
	</nav>
</template>
