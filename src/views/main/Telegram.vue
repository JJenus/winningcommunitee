<script setup>
import { onMounted, ref } from "vue";
import axios from "axios";

const env = import.meta.env;
let telegramLink = ref("https://T.me/bankswin");

function getSettings() {
  let config = {
    method: "GET",
    url: `${env.VITE_BE_API}/settings`,
  };

  axios
    .request(config)
    .then((res) => {
      let data = res.data;
      // console.log(data);
      if (data.telegramLink) telegramLink.value = data.telegramLink;
    })
    .catch((error) => {
      // console.log(error);
    });
}

function interact() {
  let config = {
    method: "POST",
    url: `${env.VITE_BE_API}/interact/telegram/click`,
  };

  axios
    .request(config)
    .then((res) => {
      let data = res.data;
      // console.log(data);
    })
    .catch((error) => {
      // console.log(error);
    });
}

onMounted(() => {
  getSettings();
});
</script>

<template>
  <div class="bg-daurk pb-8 pt-4">
    <div class="container px-4 px-lg-0">
      <div class="row justify-content-center">
        <div class="col-12 col-md-8 fs-4 p-4 shadow">
          <h4 class="text-center mb-3 display-4">Join us on Telegram</h4>
          <p>
            Join the discussion on telegram and get extensive, well thought-of,
            and customised football (soccer) picks. Join and have automatic
            access to VIP and free groups.
          </p>
          <div
            class="d-flex flex-column justify-content-center align-items-center"
          >
            <img
              :src="env.VITE_BASE_URL + '/assets/images/logo/favicon.png'"
              width=""
              class="img-fluid mb-2"
              alt=""
            />
            <h1 class="display-5 text-warning mb-6">Winning community</h1>
            <a :href="telegramLink" class="btn btn-primary" target="_blank" @click="interact()">Join On Telegram</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
