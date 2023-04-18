<script setup>
	import { useAuthStore } from "@/stores/auth";

	const auth = useAuthStore();
	const user = auth.getUser();
</script>

<template>
	<div class="dropdown ms-2">
		<a
			class="rounded-circle d-flex justify-content-center align-items-center"
			href="#"
			role="button"
			data-bs-toggle="dropdown"
		>
			<div class="avatar avatar-md avatar-onliine d-flex justify-content-center align-items-center">
				<img
					v-if="user.imgUrl !== null"
					alt="avatar"
					:src="user.imgUrl"
					class="rounded-circle"
				/>
				<i v-else class="bi text-light bi-person-circle h1 m-0 p-0"></i>
			</div>
		</a>
		<div class="dropdown-menu dropdown-menu-end shadow">
			<div class="dropdown-item">
				<div class="d-flex">
					<div
						class="avatar avatar-md avatar-indicators avatar-online"
					>
						<a href="/account" class="text-dark">
							<img
								v-if="user.imgUrl !== null"
								alt="avatar"
								:src="user.imgUrl"
								class="rounded-circle"
							/>
							<i v-else class="bi bi-person-circle fs-2"></i>
						</a>
					</div>
					<div class="ms-3 lh-1">
						<h5 class="mb-1">{{ user.name }}</h5>
						<p class="mb-0 text-muted">{{ user.email }}</p>
					</div>
				</div>
			</div>
			<div class="dropdown-divider"></div>
			<ul class="list-unstyled">
				<li>
					<a class="dropdown-item" href="/account">
						<i class="fe fe-user me-2"></i>Profile
					</a>
				</li>
				<li>
					<a class="dropdown-item" href="/account/subscriptions">
						<i class="fe fe-star me-2"></i>Subscription
					</a>
				</li>
				<li>
					<a class="dropdown-item d-none" href="/account/profile">
						<i class="fe fe-settings me-2"></i>Settings
					</a>
				</li>
			</ul>
			<div class="dropdown-divider"></div>
			<ul class="list-unstyled">
				<li>
					<a class="dropdown-item" @click="auth.logout()">
						<i class="fe fe-power me-2"></i>Sign Out
					</a>
				</li>
			</ul>
		</div>
	</div>
</template>
