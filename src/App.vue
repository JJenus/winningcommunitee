<script setup>
	import { RouterView } from "vue-router";
	import PerfectScrollbar from "perfect-scrollbar";

	const body = document.querySelector(".ps-scroll");
	const ps = new PerfectScrollbar(body);

</script>

<template>
	<RouterView />
</template>

<style src="perfect-scrollbar/css/perfect-scrollbar.css">
	/* @import "perfect-scrollbar/css/perfect-scrollbar.css"; */
</style>
