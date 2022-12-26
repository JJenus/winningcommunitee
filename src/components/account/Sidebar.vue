<script setup>
	import { onMounted, ref } from "vue";
	import { useRoute, useRouter } from "vue-router";

	const env = import.meta.env;

	const router = useRouter();
	const route = useRoute();

	let path = ref("");

	onMounted(async () => {
		await router.isReady();
		path.value = route.name;
	});
</script>

<template>
	<nav
		class="navbar navbar-expand-md navbar-light shadow-sm mb-4 mb-lg-0 sidenav"
	>
		<!-- Menu -->
		<a class="d-xl-none d-lg-none d-md-none text-inherit fw-bold" href="#"
			>Menu</a
		>
		<!-- Button -->
		<button
			class="navbar-toggler d-md-none icon-shape icon-sm rounded bg-primary text-light"
			type="button"
			data-bs-toggle="collapse"
			data-bs-target="#sidenav"
			aria-controls="sidenav"
			aria-expanded="false"
			aria-label="Toggle navigation"
		>
			<span class="fe fe-menu"></span>
		</button>
		<!-- Collapse navbar -->
		<div class="collapse navbar-collapse" id="sidenav">
			<div class="navbar-nav flex-column">
				<span class="navbar-header">Subscription</span>
				<ul class="list-unstyled ms-n2 mb-4">
					<!-- Nav item -->
					<li :class="path=='games'? 'active':''" class="nav-item">
						<a class="nav-link" href="games">
							<i class="fe fe-credit-card nav-icon"></i>
							Games
						</a>
					</li>
					<!-- Nav item -->
					<li :class="path=='subscriptions'? 'active':''" class="nav-item">
						<a class="nav-link" href="subscriptions"
							><i class="fe fe-calendar nav-icon"></i>My
							Subscriptions
						</a>
					</li>

					<!-- Nav item -->
					<li :class="path=='plans'? 'active':''" class="nav-item">
						<a class="nav-link" href="plans"
							><i class="fe fe-calendar nav-icon"></i>
							Plans
						</a>
					</li>

					<!-- Nav item -->
					<li :class="path=='invoice'? 'active':''" class="nav-item disabled d-none">
						<a class="nav-link disabled" href="/invoice"
							><i class="fe fe-clipboard nav-icon"></i>Invoice</a
						>
					</li>
				</ul>
				<!-- Navbar header -->
				<span class="navbar-header">Account Settings</span>
				<ul class="list-unstyled ms-n2 mb-0">
					<!-- Nav item -->
					<li :class="path=='profile'? 'active':''" class="nav-item">
						<a class="nav-link" href="profile">
							<i class="fe fe-user nav-icon"></i>
							Edit Profile
						</a>
					</li>
					<!-- Nav item -->
					<li :class="path=='security'? 'active':''" class="nav-item">
						<a class="nav-link" href="security"
							><i class="fe fe-settings nav-icon"></i>Security</a
						>
					</li>
					<!-- Nav item -->
					<li class="nav-item">
						<a class="nav-link">
							<i class="fe fe-trash nav-icon"></i>
							Delete Profile
						</a>
					</li>
					<!-- Nav item -->
					<li class="nav-item">
						<a class="nav-link" href=""
							><i class="fe fe-power nav-icon"></i>Sign Out</a
						>
					</li>
				</ul>
			</div>
		</div>
	</nav>
</template>
