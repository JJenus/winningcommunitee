<script setup>
	import { RouterView } from "vue-router";

	import NavbarVue from "@/components/account/Navbar.vue";
	import SidebarVue from "@/components/account/Sidebar.vue";
	
</script>

<template>
	<NavbarVue />

	<!-- Page Content -->
	<div class="pt-md-4 pb-5">
		<div class="container-fluid">
			<!-- Content -->

			<div class="row mt-0">
				<div class="col-lg-3 col-md-4 col-12">
					<!-- Side navbar -->
					<SidebarVue />
				</div>
				<div class="col-lg-9 col-md-8 col-12">
					<!-- Card -->
					<RouterView />
				</div>
			</div>
		</div>
	</div>
</template>

<style>
	@import "@/assets/account/css/theme.min.css";
</style>
