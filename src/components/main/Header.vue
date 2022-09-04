<script setup>
const env = import.meta.env;
</script>
<template>
  <nav
    class="navbar navbar-expand-lg navbar-dark is-navbar-dark position-lg-absolute w-100"
  >
    <div class="container px-0">
      <a class="navbar-brand" href="/">
        <img
          :src="env.VITE_BASE_URL + '/assets/images/logo/logo.png'"
          class="img-fluid"
          alt=""
        />
      </a>
    </div>
  </nav>
</template>
