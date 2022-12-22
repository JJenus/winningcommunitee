<script setup>
	import UserDropown from "@/components/UserDropdown.vue";
	import { useAuthStore } from "@/stores/auth";

	const auth = useAuthStore();
	const user = auth.getUser();
</script>

<template>
	<nav class="navbar navbar-expand-lg navbar-default">
		<div class="container-fluid p-0">
			<a class="navbar-brand" href="/">
				<img
					class="d-none d-md-block"
					width="300"
					src="/assets/images/logo/logo.png"
					alt=""
				/>
				<img
					class="d-md-none"
					width="200"
					src="/assets/images/logo/logo.png"
					alt=""
				/>
			</a>
			<!-- Mobile view nav wrap -->
			<ul
				class="navbar-nav navbar-right-wrap ms-auto d-flex nav-top-wrap"
			>
				<li class="dropdown stopevent d-none">
					<a
						class="btn btn-light btn-icon rounded-circle text-muted indicator indicator-primary"
						href="#"
						role="button"
						data-bs-toggle="dropdown"
					>
						<i class="fe fe-bell"> </i>
					</a>
					<div class="dropdown-menu dropdown-menu-end shadow">
						<div>
							<div
								class="border-bottom px-3 pb-3 d-flex justify-content-between align-items-center"
							>
								<span class="h5 mb-0">Notifications</span>
								<a href="# " class="text-muted"
									><span class="align-middle"
										><i
											class="fe fe-settings me-1"
										></i></span
								></a>
							</div>
							<ul
								class="list-group list-group-flush"
								style="height: 100px"
								data-simplebar
							></ul>
							<div class="border-top px-3 pt-3 pb-0">
								<!-- //// -->
							</div>
						</div>
					</div>
				</li>
				<li >
					<UserDropown></UserDropown>
				</li>
			</ul>
		</div>
	</nav>
</template>
