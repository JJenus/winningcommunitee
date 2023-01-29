<script setup>
	import { RouterView } from "vue-router";
	import Navbar from "@/components/main/Navbar.vue";
	import Footer from "@/components/main/Footer.vue";
	import Header from "@/components/main/Header.vue";
	import AuthModalVue from "@/components/main/AuthModal.vue";
	import WonMarque from "@/components/main/WonMarque.vue";
</script>

<template>
	<Header />
	<Navbar />
	<RouterView />
	<AuthModalVue />
	<Footer />
    <WonMarque></WonMarque>
</template>

<style scoped>
	@import "@/assets/main/css/theme.min.css";
</style>
