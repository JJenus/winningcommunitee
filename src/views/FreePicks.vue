<script setup>
import axios from "axios";
import { onMounted, ref } from "vue";
import Fixture from "@/components/freepicks/fixture.vue";

//CODES
const env = import.meta.env;

const predictions = ref([]);

function fetchPredictions() {
  let config = {
    method: "GET",
    url: `${env.VITE_BE_API}/predictions/free-picks`,
  };

  axios
    .request(config)
    .then((res) => {
      let data = res.data;
      predictions.value = data;
    })
    .catch((error) => {
      console.log(error);
    });
}

onMounted(() => {
  fetchPredictions();
});

(function (w, d, s, o, f, js, fjs) {
  w["fsStandingsEmbed"] = o;
  w[o] =
    w[o] ||
    function () {
      (w[o].q = w[o].q || []).push(arguments);
    };
  (js = d.createElement(s)), (fjs = d.getElementsByTagName(s)[0]);
  js.id = o;
  js.src = f;
  js.async = 1;
  fjs.parentNode.insertBefore(js, fjs);
})(
  window,
  document,
  "script",
  "mw",
  "assets/js/standings.js"
);

mw("params", { leagueID: 7665, elementID: 'fb-standings' });
mw("params", { leagueID: 7704, elementID: 'fs-standings' });

</script>

<template>
  <div class="bg-dark pb-4">
    <div class="container px-4 px-lg-0">
      <div class="row mb-3">
        <div class="col-md-8 mb-3 col-12">
          <div class="card mx-n3 mx-md-0">
            <div class="card-body px-0 px-md-4">
              <div class="table-responsive pb-3">
                <table class="table table-sm text-nowrap mb-0">
                  <thead class="">
                    <tr class="bg-dark text-warning">
                      <th colspan="">Fixtures</th>
                      <td class="align-middle">1</td>
                      <td class="align-middle">X</td>
                      <td class="align-middle">2</td>
                      <td class="align-middle fw-bold">pick</td>
                      <td class="align-middle">odd</td>
                      <td class="align-middle">Status</td>
                    </tr>
                  </thead>

                  <tbody>
                    <Fixture
                      v-for="prediction in predictions"
                      :fixture="prediction"
                    ></Fixture>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        <div class="col-md-4 mb-3 col-12 text-light">
          <h1 class="mb-2">
            <span
              class="rounded-circle text-danger border border-danger px-1 py-2"
              >+18</span
            >
            <small class="text-light ms-3">only</small>
          </h1>
          <span class="">Super predictions everyday</span>

            <div class="mt-4 text-dark w-100" id="fs-standings"></div>
            <div class="mt-4 text-dark w-100" id="fb-standings"></div>
        </div>
      </div>
    </div>
  </div>
</template>
