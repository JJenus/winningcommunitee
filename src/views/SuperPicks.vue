<script setup>
import axios from "axios";
import { onMounted, ref } from "vue";
import { useCounterStore, predictionStore } from "@/stores/store";
import { util } from "../stores/utility";
import Pick from "../components/superpicks/Pick.vue";

//CODES
const options = {
  method: "GET",
  url: "https://sports-betting-predictions.p.rapidapi.com/v1/prediction",
  params: { sport_id: "1", date: "2021-09-09" },
  headers: {
    "X-RapidAPI-Key": "4e7d8bec8cmsha01fa385aca3b94p1f767ejsn6c53b309ac79",
    "X-RapidAPI-Host": "sports-betting-predictions.p.rapidapi.com",
  },
};

const predictions = ref([]);
const vipPicks = ref([]);

function loadCount() {
  let temp = useCounterStore();
  temp.increment();
  predictions.value = temp.count;
  console.log(predictions.value);
}

function loadPredictions() {
  let temp = predictionStore();
  predictions.value = temp.getSuperPicks().splice(0, 10);
  console.log(predictions.value);
}

function loadSuperPicks() {
  let temp = predictionStore();
  vipPicks.value = temp
    .getSuperPicks(0.8)
    .splice(0, 4)
    .map((e) => {
      e.prediction = rand() + "-" + rand();
      e.market_name = "CS";
      return e;
    });
}

function rand() {
  return (Math.random() * 4) | 0;
}

function fetchPredictions() {
  axios
    .request(options)
    .then((response) => {
      console.log(response.data);
      //predictions.value = response.data;
      //console.log(predictions.value);
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
  //fetchPredictions();
  loadSuperPicks();
  loadPredictions();
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
                          <td class="align-middle">Odd</td>
                          <td class="align-middle">Win %</td>
                          <td class="align-middle">Result</td>
                          <td class="align-middle">Status</td>
                        </tr>
                      </thead>

                      <tbody>
                        <Pick v-for="pick in vipPicks" :fixture="pick"></Pick>
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
