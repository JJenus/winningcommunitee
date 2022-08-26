<script setup>
import moment from "moment";
import { util } from "@/stores/utility";

const props = defineProps({
  fixture: {
    type: Object,
    required: true,
  },
});

function odd() {
  let pick = props.fixture.prediction;
  let odds = props.fixture.odds;
  return util.format(odds[pick], 2, ".", ",");
}
</script>

<template>
  <tr class="bg-light">
    <th colspan="7" class="fw-light">
      {{ fixture.competition_cluster }}: {{ fixture.competition_name }}
      <small class="ms-4">{{
        moment(fixture.start_date).format("DD-MM-YY hh:mm a")
      }}</small>
    </th>
  </tr>
  <tr>
    <td class="align-middle">
      <div class="d-flex align-items-start justify-content-even">
        <div class="d-flex flex-column">
          <div class="d-flex align-items-center">
            <div>
              <div>
                <img
                  class="d-none"
                  width="20"
                  src=""
                  alt=""
                />
              </div>
            </div>
            <div class="ms-2 lh-3">
              <span class="fw-bold"> {{ fixture.home_team }} </span>
            </div>
          </div>
          <div class="d-none">
            <small class="badge p-1 bg-success">W</small>
            <span class="badge p-1 bg-danger">L</span>
            <span class="badge p-1 bg-dark">D</span>
            <span class="badge p-1 bg-success">W</span>
            <span class="badge p-1 bg-success">W</span>
          </div>
        </div>

        <span class="mx-3 px-2">vs</span>

        <div class="d-flex flex-column justify-content-end">
          <div class="d-flex align-items-center justify-content-end">
            <div class="me-2 lh-3">
              <span class="fw-bold"> {{ fixture.away_team }} </span>
            </div>
            <div>
              <div>
                <img
                  class="d-none"
                  width="20"
                  src=""
                  alt=""
                />
              </div>
            </div>
          </div>
          <div class="d-none">
            <small class="badge p-1 bg-success">W</small>
            <span class="badge p-1 bg-success">W</span>
            <span class="badge p-1 bg-dark">D</span>
            <span class="badge p-1 bg-dark">D</span>
            <span class="badge p-1 bg-success">W</span>
          </div>
        </div>
      </div>
    </td>
    <td class="align-middle">
      {{ util.format(fixture.odds["1"], 2, ".", ",") }}
    </td>
    <td class="align-middle">
      {{ util.format(fixture.odds["X"], 2, ".", ",") }}
    </td>
    <td class="align-middle">
      {{ util.format(fixture.odds["2"], 2, ".", ",") }}
    </td>
    <td class="align-middle fw-bold">{{ fixture.prediction }}</td>
    <td class="align-middle">{{ odd() }}</td>
    <td class="align-middle">{{ fixture.status }}</td>
  </tr>
</template>
