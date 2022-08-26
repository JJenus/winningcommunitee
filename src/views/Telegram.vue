<script setup>
import { ref } from 'vue';


let telegramLink = ref("https://T.me/bankswin")
</script>

<template>
  <div class="bg-daurk pb-8 pt-4">
    <div class="container px-4 px-lg-0">
      <div class="row justify-content-center">
        <div class="col-12 col-md-8 fs-4 p-4 shadow">
          <h4 class="text-center mb-3 display-4">Join us on Telegram</h4>
          <p>
            Join the discussion on telegram and get extensive, well thought-of,
            and customised football (soccer) picks. Join and have automatic access to VIP and free groups.
          </p>
          <div class="d-flex flex-column justify-content-center align-items-center">
            <img src="assets/images/logo/favicon.png" width="" class="img-fluid mb-2" alt="">
            <h1 class="display-5 text-warning mb-6 ">Winning community</h1>
            <a :href="telegramLink" class="btn btn-primary">Join On Telegram</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
