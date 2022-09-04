<script setup>
const env = import.meta.env;
</script>

<template>
  <div class="container">
    <div
      class="row align-items-center justify-content-center g-0 py-lg-22 py-10"
    >
      <!-- Docs -->
      <div
        class="offset-xl-1 col-xl-4 col-lg-6 col-md-12 col-12 text-center text-lg-start"
      >
        <h1 class="display-1 mb-3">404</h1>

        <p class="mb-5 lead">
          Oops! Sorry, we couldn’t find the page you were looking for. If you
          think this is a problem with us, please
          <a href="#" class="btn-link">Contact us</a>
        </p>
        <a href="/" class="btn btn-primary me-2">Back to Safety</a>
      </div>
      <!-- img -->
      <div class="offset-xl-1 col-xl-6 col-lg-6 col-md-12 col-12 mt-8 mt-lg-0">
        <img :src="env.VITE_BASE_URL + '/assets/images/404-error-img.svg'" alt="" class="w-100" />
      </div>
    </div>
  </div>
</template>
