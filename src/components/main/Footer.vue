<script setup>
	import moment from "moment";

	const env = import.meta.env;
	function dateNow() {
		return moment().format("YYYY-MM-DD");
	}
</script>

<template>
	<div class="footer d-none py-8">
		<div class="container">
			<div class="row">
				<div class="offset-lg-2 col-lg-8 col-md-12 col-12 mb-8">
					<div class="text-center px-lg-8">
						<div class="p-4 p-md-0">
							<img
								:src="
									env.VITE_BASE_URL +
									'/assets/images/logo/logo.png'
								"
								alt=""
								class="img-fluid mb-3"
							/>
						</div>
						<p class="mb-0">
							Community winners aims at building a better
							community of winners, reducing the probability for a
							loss. Predictions on this platform are mainly based
							on mathetical algorithms to give a better
							understanding and more from past statistics.
						</p>
					</div>
				</div>

				<!-- Desc -->
				<div class="col-md-6 col-12 text-center text-md-start">
					<span
						>© {{ dateNow() }} Community winner. Predictions made
						better by <a href="/sure-pics/">Sure picks</a></span
					>
				</div>
				<!-- Links -->
				<div class="col-12 col-md-6">
					<nav
						class="nav nav-footer justify-content-center justify-content-md-end"
					>
						<a class="nav-link active ps-0" href="" target="_blank"
							>about</a
						>
						<a class="nav-link" href="" target="_blank">Support </a>
						<a class="nav-link" href="" target="_blank">terms</a>
					</nav>
				</div>
			</div>
		</div>
	</div>

	<div class="pt-lg-10 pt-5 pb-8 footer bg-white">
		<div class="container">
			<div class="row">
				<div class="col-lg-4 col-md-6 col-12">
					<!-- about company -->
					<div class="mb-4">
						<img
							src="/assets/images/logo/logo.png"
							alt=""
							class="img-fluid"
						/>
						<div class="mt-4">
							<p>
								Community winners aims at building a better
								community of winners, reducing the probability
								for a loss. Predictions on this platform are
								mainly based on mathetical algorithms to give a
								better understanding and more from past
								statistics.
							</p>
							<!-- social media -->
							<div class="fs-4 mt-4">
								<a
									href="#"
									class="mdi mdi-facebook fs-4 text-muted me-2"
								></a>
								<a
									href="#"
									class="mdi mdi-twitter text-muted me-2"
								></a>
								<a
									href="#"
									class="mdi mdi-instagram text-muted"
								></a>
							</div>
						</div>
					</div>
				</div>
				<div class="offset-lg-1 col-lg-2 col-md-3 col-6">
					<div class="mb-4">
						<!-- list -->
						<h3 class="fw-bold mb-3">Company</h3>
						<ul
							class="list-unstyled nav nav-footer flex-column nav-x-0"
						>
							<li><a href="/about" class="nav-link">About</a></li>
							<li><a href="#" class="nav-link">Pricing</a></li>
							<li>
								<a href="/contact-us" class="nav-link"
									>Contact</a
								>
							</li>
						</ul>
					</div>
				</div>
				<div class="col-lg-2 col-md-3 col-6">
					<div class="mb-4">
						<!-- list -->
						<h3 class="fw-bold mb-3">Support</h3>
						<ul
							class="list-unstyled nav nav-footer flex-column nav-x-0"
						>
							<li>
								<a href="/contact-us" class="nav-link"
									>Help and Support</a
								>
							</li>
							<li>
								<a href="#" class="nav-link">Get the app</a>
							</li>
							<li><a href="#" class="nav-link">FAQ’s</a></li>
							<li><a href="#" class="nav-link">Tutorial</a></li>
						</ul>
					</div>
				</div>
				<div class="col-lg-3 col-md-12">
					<!-- contact info -->
					<div class="mb-4">
						<h3 class="fw-bold mb-3">Get in touch</h3>
						<p class="d-none">
							339 McDermott Points Hettingerhaven, NV 15283
						</p>
						<p class="mb-1">
							Email: <a href="#">support@winningcommunitee.com</a>
						</p>
						<p>
							Phone:
							<span class="text-dark fw-semi-bold"
								>(+1) <span class="muted"></span
							></span>
						</p>
					</div>
				</div>
			</div>
			<div class="row align-items-center g-0 border-top py-2 mt-6">
				<!-- Desc -->
				<div class="col-lg-10 col-12">
					<div class="d-lg-flex align-items-center">
						<div class="me-4">
							<span
								>© Winningcommunitee. All Rights Reserved</span
							>
						</div>
						<div>
							<nav class="nav nav-footer">
								<a class="nav-link ps-0" href="#"
									>Privacy Policy</a
								>
								<a class="nav-link px-2 px-md-3" href="#"
									>Cookie Notice
								</a>

								<a class="nav-link" href="#">Terms of Use</a>
							</nav>
						</div>
					</div>
				</div>

				<!-- Links -->
				<div class="col-2 col-lg-2 d-md-flex justify-content-end">
					<div class="dropdown">
						<a
							href="#"
							class="dropdown-toggle text-body"
							id="dropdownMenuLink"
							data-bs-toggle="dropdown"
							aria-expanded="false"
						>
							<i class="fe fe-globe me-2 align-middle"></i
							>Language
						</a>
						<ul
							class="dropdown-menu"
							aria-labelledby="dropdownMenuLink"
						>
							<li>
								<a class="dropdown-item" href="#"
									><span class="me-2">
										<svg
											width="16"
											height="13"
											viewBox="0 0 16 13"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											<g
												clip-path="url(#clip0_5543_19736)"
											>
												<path
													d="M0 0.5H16V12.5H0V0.5Z"
													fill="#012169"
												/>
												<path
													d="M1.875 0.5L7.975 5.025L14.05 0.5H16V2.05L10 6.525L16 10.975V12.5H14L8 8.025L2.025 12.5H0V11L5.975 6.55L0 2.1V0.5H1.875Z"
													fill="white"
												/>
												<path
													d="M10.6 7.525L16 11.5V12.5L9.225 7.525H10.6ZM6 8.025L6.15 8.9L1.35 12.5H0L6 8.025ZM16 0.5V0.575L9.775 5.275L9.825 4.175L14.75 0.5H16ZM0 0.5L5.975 4.9H4.475L0 1.55V0.5Z"
													fill="#C8102E"
												/>
												<path
													d="M6.025 0.5V12.5H10.025V0.5H6.025ZM0 4.5V8.5H16V4.5H0Z"
													fill="white"
												/>
												<path
													d="M0 5.325V7.725H16V5.325H0ZM6.825 0.5V12.5H9.225V0.5H6.825Z"
													fill="#C8102E"
												/>
											</g>
											<defs>
												<clipPath id="clip0_5543_19736">
													<rect
														width="16"
														height="12"
														fill="white"
														transform="translate(0 0.5)"
													/>
												</clipPath>
											</defs>
										</svg> </span
									>English</a
								>
							</li>
							<li>
								<a class="dropdown-item" href="#"
									><span class="me-2">
										<svg
											width="16"
											height="13"
											viewBox="0 0 16 13"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											<g
												clip-path="url(#clip0_5543_19744)"
											>
												<path
													fill-rule="evenodd"
													clip-rule="evenodd"
													d="M0 0.5H16V12.5H0V0.5Z"
													fill="white"
												/>
												<path
													fill-rule="evenodd"
													clip-rule="evenodd"
													d="M0 0.5H5.3325V12.5H0V0.5Z"
													fill="#002654"
												/>
												<path
													fill-rule="evenodd"
													clip-rule="evenodd"
													d="M10.668 0.5H16.0005V12.5H10.668V0.5Z"
													fill="#CE1126"
												/>
											</g>
											<defs>
												<clipPath id="clip0_5543_19744">
													<rect
														width="16"
														height="12"
														fill="white"
														transform="translate(0 0.5)"
													/>
												</clipPath>
											</defs>
										</svg> </span
									>Français</a
								>
							</li>
							<li>
								<a class="dropdown-item" href="#"
									><span class="me-2">
										<svg
											width="16"
											height="13"
											viewBox="0 0 16 13"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											<g
												clip-path="url(#clip0_5543_19751)"
											>
												<path
													d="M0 8.5H16V12.5H0V8.5Z"
													fill="#FFCE00"
												/>
												<path
													d="M0 0.5H16V4.5H0V0.5Z"
													fill="black"
												/>
												<path
													d="M0 4.5H16V8.5H0V4.5Z"
													fill="#DD0000"
												/>
											</g>
											<defs>
												<clipPath id="clip0_5543_19751">
													<rect
														width="16"
														height="12"
														fill="white"
														transform="translate(0 0.5)"
													/>
												</clipPath>
											</defs>
										</svg> </span
									>Deutsch</a
								>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
