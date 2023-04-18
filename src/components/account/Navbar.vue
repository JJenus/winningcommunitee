<script setup>
	import UserDropown from "@/components/UserDropdown.vue";
	import { useAuthStore } from "@/stores/auth";

	const auth = useAuthStore();
	const user = auth.getUser();
</script>

<template>
	<nav class="navbar navbar-expand-lg navbar-default bg-dark">
		<div class="container-fluid p-0">
			<a class="navbar-brand" href="/">
				<img
					class="d-none d-md-block"
					width="270"
					src="/assets/images/logo/logo-white.png"
					alt=""
				/>
				<img
					class="d-md-none"
					width="200"
					src="/assets/images/logo/logo-white.png"
					alt=""
				/>
			</a>
			<!-- Mobile view nav wrap -->
			<ul
				class="navbar-nav navbar-right-wrap ms-auto d-flex nav-top-wrap"
			>
				<li>
					<UserDropown></UserDropown>
				</li>
			</ul>
		</div>
	</nav>
</template>
