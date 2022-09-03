<script setup>
import axios from "axios";
import { onMounted, ref } from "vue";
import { util } from "../stores/utility";
import Pick from "../components/superpicks/Pick.vue";
import VIP from "../components/superpicks/VIP.vue";

//CODES
const env = import.meta.env;

const predictions = ref([]);
let rawSuperPicks = [];
const vipPicks = ref([]);

function loadPredictions() {
  let prob = 0.8;
  do {
    predictions.value = getSuperPicks(predictions.value, prob).splice(0, 10);
    prob = util.format(prob - 0.01, 2, ".", ",");
  } while (predictions.value.length < 10);
}

function getSuperPicks(data, per = 0.78) {
  return rawSuperPicks.filter((e) => {
    return Number(e.probability) * 100 === Number(per) * 100;
  });
}

function fetchVipPicks() {
  let config = {
    method: "GET",
    url: `${env.VITE_BE_API}/predictions/vip-picks`,
  };

  axios
    .request(config)
    .then((res) => {
      let data = res.data;
      console.log(data);
      vipPicks.value = data;
    })
    .catch((error) => {
      console.log(error);
    });
}

function fetchPredictions() {
  let config = {
    method: "GET",
    url: `${env.VITE_BE_API}/predictions/super-picks`,
  };

  axios
    .request(config)
    .then((response) => {
      let data = response.data;
      rawSuperPicks=data;
      loadPredictions();
    })
    .catch(function (error) {
      console.error(error);
    });
}

function totalSuperOdd() {
  let odd = predictions.value?.reduce((p, n) => p * n.odd, 1);
  return util.format(odd, 2, ".", ",");
}

onMounted(() => {
  fetchVipPicks();
  fetchPredictions();
});
</script>

<template>
  <div class="bg-dark pb-4">
    <div class="container-fluid">
      <div class="row mb-3">
        <div class="col-md-8 mb-3 col-12">
          <div class="card mx-n3 mx-md-0">
            <div class="card-body px-0 px-md-4">
              <h3 class="mb-3 mx-3">
                Total odd: <strong>{{ totalSuperOdd() }}</strong>
              </h3>
              <div class="table-responsive pb-3">
                <table class="table table-sm text-nowrap mb-0">
                  <thead class="">
                    <tr class="bg-dark text-warning">
                      <th colspan="">Super picks</th>
                      <td class="align-middle">Pick</td>
                      <td class="align-middle">Odd</td>
                      <td class="align-middle">Win %</td>
                      <td class="align-middle">Result</td>
                      <td class="align-middle">Status</td>
                    </tr>
                  </thead>

                  <tbody>
                    <Pick v-for="pick in predictions" :fixture="pick"></Pick>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        <div class="col-md-4 mt-3 mt-md-0 mb-3 col-12 text-light">
          <div class="row">
            <div class="col-12 mb-3 col-12 text-light">
              <h1 class="mb-2">
                <span
                  class="rounded-circle text-danger border border-danger px-1 py-2"
                  >+18</span
                >
                <small class="text-light ms-3">only</small>
              </h1>
              <span class="">Super predictions everyday</span>
              <p class="mt-4 text-warning">
                You're adviced to pick only the best and maximize your stake,
                but to get
                <strong
                  ><em
                    >more accurate picks, please contact the experts.</em
                  ></strong
                >
              </p>
            </div>
            <div class="col-12 order-md-last mb-3 col-12">
              <div class="card mx-n3 mx-md-0">
                <div class="card-body px-0 px-md-4">
                  <h3 class="mb-3 mx-3">VIP Picks</h3>
                  <div class="table-responsive pb-3">
                    <table class="table table-sm text-nowrap mb-0">
                      <thead class="">
                        <tr class="bg-dark text-warning">
                          <th colspan="">Super picks</th>
                          <td class="align-middle">Pick</td>
                          <td class="align-middle">Result</td>
                        </tr>
                      </thead>

                      <tbody>
                        <VIP v-for="pick in vipPicks" :fixture="pick"></VIP>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
