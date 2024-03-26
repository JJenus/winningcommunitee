<script setup>
	import axios from "axios";
	import { onMounted, ref } from "vue";

	const env = import.meta.env;

	const matches = ref([]);
	const loading = ref(true);

	function getGames() {
		console.log(`${env.VITE_BE_API}/matches/latest`);
		let config = {
			method: "Get",
			url: `${env.VITE_BE_API}/matches/latest`,
		};

		loading.value = true;

		axios
			.request(config)
			.then((res) => {
				matches.value = res.data;
			})
			.catch((error) => {
				console.log(error);
			})
			.finally(() => {
				loading.value = false;
			});
	}

	onMounted(() => {
		getGames();
	});
</script>
<template>
	<div class="w-100">
		<div
			v-if="loading"
			class="d-flex align-items-center justify-content-center"
		>
			<span class="spinner-border spinner-border-lg text-muted"></span>
		</div>
		<div class="card bg-transparent d-none d-md-block border-top border-bottom border-primary rounded-3 mx-5">
			<div class="card-body">
				<div v-if="!loading" class="table-responsive">
					<table class="table text-white fw-bold">
						<thead>
							<tr>
								<th>Date</th>
								<th>Match</th>
								<th>Tip</th>
								<th>Odd</th>
							</tr>
						</thead>
						<tbody>
							<tr v-for="match in matches">
								<td>{{ match.matchTime }}</td>
								<td>
									<div
										class="d-flex justify-content-between align-items-center"
									>
										<div>{{ match.home }}</div>
										<div class="mx-3">-</div>
										<div>{{ match.away }}</div>
									</div>
									<div class="text-center">
										<div class="badge bg-secondary">
											{{ match.league }}
										</div>
									</div>
								</td>
								<td>{{ match.tip }}</td>

								<td>
									<div class="d-flex align-items-center">
										{{ match.odd }}
										<span
											:class="
												match.status.toLowerCase() ==
												'won'
													? 'bg-success'
													: match.status == 'pending'
													? 'bg-secondary'
													: 'bg-danger'
											"
											class="badge bg-successi ms-2"
											>{{ match.status }}</span
										>
									</div>
								</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		</div>

		<div
			class="px-lg-3 "
		>
			<div v-if="!loading" class="row g-5 row-cols-1 d-md-none">
				<div v-for="match in matches" class="col">
					<div class="card bg-transparenti rounded border-0 shadow">
						<div class="card-body p-2">
							<div class="d-flex justify-content-between">
								<h6 class="h5">{{ match.league }}</h6>
								<span class="text-muted fw-bold">
									{{ match.matchTime }}
								</span>
							</div>
							<div
								class="d-flex justify-content-between align-items-center fw-bold me-1"
							>
								<div
									style="max-width: 150px"
									class="d-flex flex-column"
								>
									<div>{{ match.home }}</div>
									<div>{{ match.away }}</div>
								</div>
								<div class="text-center fw-bold">
									{{ match.tip }}
								</div>
								<div class="text-center fw-bold mx-2">
									{{ match.odd }}
								</div>
								<div
									:class="
										match.status.toLowerCase() == 'won'
											? 'bg-success'
											: match.status == 'pending'
											? 'bg-secondary'
											: 'bg-danger'
									"
									class="badge bg-successi"
								>
									{{ match.status }}
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
