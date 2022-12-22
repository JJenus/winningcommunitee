<script setup>
    import { RouterView } from 'vue-router';
    import Navbar from '@/components/main/Navbar.vue';
    import Footer from '@/components/main/Footer.vue';
    import Header from '@/components/main/Header.vue';
    import AuthModalVue from '@/components/main/AuthModal.vue';
</script>

<template>
    <Header />
    <Navbar />
    <RouterView />
    <AuthModalVue />
    <Footer />
</template>

<style scoped>
    @import "@/assets/main/css/theme.min.css";
</style>