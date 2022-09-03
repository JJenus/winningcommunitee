<script setup>
  import moment from 'moment';
  
const props = defineProps({
  fixture: {
    type: Object,
    required: true,
  },
});

props.fixture.results = "won"


</script>
<template>
    <tr class="bg-light">
      <th colspan="3" class="fw-light">
        {{ fixture.competition }}
        <small class="ms-4">{{
          moment(fixture.date).format("DD-MM-YY hh:mm A")
        }}</small>
      </th>
    </tr>
    <tr :class="(fixture.results === 'won')? 'text-success': (fixture.results==='lost'? 'text-danger':'')">
      <td class="align-middle">
        <div class="d-flex align-items-start justify-content-even">
          <div class="d-flex flex-column">
            <div class="d-flex align-items-center">
              <div class="ms-2 lh-3">
                <span class="fw-bold"> {{ fixture.homeTeam }} </span>
              </div>
            </div>
          </div>
  
          <span class="mx-3 px-2">vs</span>
  
          <div class="d-flex flex-column justify-content-end">
            <div class="d-flex align-items-center justify-content-end">
              <div class="me-2 lh-3">
                <span class="fw-bold"> {{ fixture.awayTeam }} </span>
              </div>
            </div>
          </div>
        </div>
      </td>
      <td class="align-middle fw-bold">CS {{ fixture.homeTeamGoals }} - {{ fixture.awayTeamGoals }}</td>
      
      <td class="align-middle">{{ fixture.results }}</td>
    </tr>
  </template>