<script setup>
import moment from 'moment';

const env = import.meta.env;
function dateNow(){
  return moment().format("YYYY-MM-DD");
}
</script>

<template>
  <div class="footer py-8">
    <div class="container">
      <div class="row">
        <div class="offset-lg-2 col-lg-8 col-md-12 col-12 mb-8">
          <div class="text-center px-lg-8">
            <div class="p-4 p-md-0">
              <img
                :src="env.VITE_BASE_URL+'/assets/images/logo/logo.png'"
                alt=""
                class="img-fluid mb-3"
              />
            </div>
            <p class="mb-0">
              Community winners aims at building a better community of winners, reducing the probability for a loss.
              Predictions on this platform are mainly based on mathetical algorithms to give a better understanding and more from past statistics.
            </p>
          </div>
        </div>

        <!-- Desc -->
        <div class="col-md-6 col-12 text-center text-md-start">
          <span
            >© {{dateNow()}} Community winner. Predictions made better by
            <a href="/sure-pics/">Sure picks</a></span
          >
        </div>
        <!-- Links -->
        <div class="col-12 d-none col-md-6">
          <nav
            class="nav nav-footer justify-content-center justify-content-md-end"
          >
            <a
              class="nav-link active ps-0"
              href=""
              target="_blank"
              >about</a
            >
            <a
              class="nav-link"
              href=""
              target="_blank"
              >Support
            </a>
            <a
              class="nav-link"
              href=""
              target="_blank"
              >terms</a
            >
          </nav>
        </div>
      </div>
    </div>
  </div>
</template>
