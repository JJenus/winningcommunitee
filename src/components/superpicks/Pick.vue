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
  let odds = props.fixture.odd;
  return util.format(odds, 2, ".", ",");
}

function prediction(){
    let pick = props.fixture.prediction;
    let type = props.fixture.market_name;

    if(type === "1st half - total"){
        type = "HT"
        pick = pick[0] + pick.split(" ")[1];
    }
    else if (type === "Away Total" || type === "Home Total"){
        type = type[0];
        pick = pick[0] + pick.split(" ")[1];
    }
    else if (type === "Total"){
        type = "";
        pick = pick[0] + pick.split(" ")[1];
    }
    else if (type === "Both teams to score"){
        type = "Bts";
    }
    else if (type === "1st half - 1x2"){
        type = "HT";
    }
    else if (type === "1x2"){
        type = ""
    }

    pick = `${type} ${pick}`;

    return pick.trim();
}
</script>

<template>
  <tr class="bg-light">
    <th colspan="6" class="fw-light">
      {{ fixture.country }}: {{ fixture.competition }}
      <small class="ms-4">{{
        moment(fixture.date).format("DD-MM-YY hh:mm A")
      }}</small>
    </th>
  </tr>
  <tr :class="(fixture.results === 'won' && fixture.fixture_status === 'Ended')? 'text-success': (fixture.results==='lost'? 'text-danger':'')">
    <td class="align-middle">
      <div class="d-flex align-items-start justify-content-even">
        <div class="d-flex flex-column">
          <div class="d-flex align-items-center">
            <div class="ms-2 lh-3">
              <span class="fw-bold"> {{ fixture.home_team }} </span>
            </div>
          </div>
        </div>

        <span class="mx-3 px-2">vs</span>

        <div class="d-flex flex-column justify-content-end">
          <div class="d-flex align-items-center justify-content-end">
            <div class="me-2 lh-3">
              <span class="fw-bold"> {{ fixture.away_team }} </span>
            </div>
          </div>
        </div>
      </div>
    </td>
    <td class="align-middle fw-bold">{{ prediction() }}</td>
    <td class="align-middle">{{ odd() }}</td>
    <td class="align-middle">
        {{ fixture.probability * 100 }}%
    </td>
    <td class="align-middle">{{ fixture.results }}</td>
    <td class="align-middle">{{ fixture.fixture_status }}</td>
  </tr>
</template>
