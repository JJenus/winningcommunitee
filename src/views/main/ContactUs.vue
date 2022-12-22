<script setup>
	import { ref } from "vue";
	import axios from "axios";

	const env = import.meta.env;

	const form = ref({
		email: "",
		subject: "",
		message: "",
	});

	function submit() {
		let config = {
			method: "POST",
			url: `${env.VITE_BE_API}/interact/messages`,
			data: form.value,
		};

		axios
			.request(config)
			.then((res) => {
				console.log(res.data);
				alert("saved");
			})
			.catch((err) => {
				console.log(err);
			});
	}
</script>

<template>
	<div class="bg-dark pb-8 pt-xl-6 ">
		<div class="pb-6 pt-4">
			<div class="container">
				<div class="row">
					<div class="offset-xl-2 col-xl-8 col-12">
						<div class="row text-white">
							<div class="col-lg-9 col-md-12 col-12 mb-8">
								<h2 class="mb-3 display-4 fw-bold text-white">
									A simple and fast experience out of the
									box.
								</h2>
								<p class="h2 text-muted">
									Everything you need, contact us via any of our support channels.
								</p>
							</div>
							<div class="col-lg-12 col-md-12 col-12">
								<!-- row -->
								<div class="row">
									<!-- col -->
									<div
										class="col-md-6 col-12 pe-lg-6 mb-lg-6 mb-4"
									>
										<!-- icon -->
										<div
											class="icon-shape icon-lg bg-primary h3 text-white rounded-3 mb-4"
										>
											<i
												class="bi bi-at fs-2"
											></i>
										</div>
										<!-- heading -->
										<h2 class="fw-bold text-white">
											Support email
										</h2>
										<!-- text -->
										<p class="fs-4 text-muted">
											<a href="mailto:support@winningcommunity.com">support@winningcommunity.com</a>
											<br>
											Contact us via email for detailed support of the platform 
											and easily track the process.
										</p>
									</div>
									<!-- col -->
									<div
										class="col-md-6 col-12 pe-lg-6 mb-lg-6 mb-4"
									>
										<!-- icon -->
										<div
											class="icon-shape icon-lg bg-primary h3 text-white rounded-3 mb-4"
										>
											<i class="bi bi-chat-square-fill fs-3"></i>
										</div>
										<!-- heading -->
										<h2 class="fw-bold text-white">
											Live Chat
										</h2>
										<!-- text -->
										<p class="fs-4 text-muted">
											Contact us via live chat for instant support on any and everything.
										</p>
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
