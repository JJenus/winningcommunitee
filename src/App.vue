<script setup>
    import { RouterView } from 'vue-router';
    import Navbar from '@/components/main/Navbar.vue';
    import Footer from '@/components/main/Footer.vue';
    import Header from '@/components/main/Header.vue';
</script>

<template>
    <Header />
    <Navbar />
    <RouterView />
    <Footer />
</template>