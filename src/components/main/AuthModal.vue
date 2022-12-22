<script setup>
	import { ref } from "vue";
	import axios from "axios";
	import { useAuthStore } from "@/stores/auth";

	const env = import.meta.env;
	const auth = useAuthStore();

	const signIn = ref(true);
	const loadingReg = ref(false);

	const form = ref({
		name: null,
		email: null,
		password: null,
		cPassword: null,
	});

	const regError = ref(null);
	const loginError = ref(null);

	function register() {
		regError.value = null;

		if (loadingReg.value) {
			return;
		}
		if (
			!form.value.email ||
			!form.value.name ||
			!form.value.password ||
			!form.value.cPassword
		) {
			regError.value = "Please fill form correctly";
			return;
		}

		console.log(regError.value);

		if (form.value.password !== form.value.cPassword) {
			regError.value = "Passwords don't match";
			return;
		}

		loadingReg.value = true;

		const { name, email, password } = form.value;
		console.log(email);

		let config = {
			method: "Post",
			url: `${env.VITE_BE_API}/auth/register`,
			data: {
				name,
				email,
				password,
			},
		};

		axios
			.request(config)
			.then((response) => {
				console.log(response.data);
				if (response.data.error) {
					regError.value = response.data.error;
				} else {
					auth.login(response.data);
					window.location.href = "/account";
				}
			})
			.catch(function (error) {
				console.log(error);
			})
			.finally(() => {
				loadingReg.value = false;
			});
	}

	function sumitLogin() {
		if (loadingReg.value) {
			return;
		}
		if (!form.value.email || !form.value.password) {
			loginError.value = "Please fill form correctly";
			return;
		}

		console.log(loginError.value);

		loadingReg.value = true;

		const { email, password } = form.value;
		console.log(email);

		let config = {
			method: "Post",
			url: `${env.VITE_BE_API}/auth/login`,
			data: {
				email,
				password,
			},
		};

		axios
			.request(config)
			.then((response) => {
				console.log(response.data);
				if (response.data.error) {
					loginError.value = response.data.error;
				} else {
					auth.login(response.data);
					window.location.href = "/account";
				}
			})
			.catch(function (error) {
				console.log(error);
			})
			.finally(() => {
				loadingReg.value = false;
			});
	}
</script>

<template>
	<div
		class="modal fade"
		id="authModal"
		tabindex="-1"
		role="dialog"
		aria-labelledby="authModal"
		aria-hidden="true"
	>
		<div class="modal-dialog" role="document">
			<div class="modal-content">
				<div class="modal-body position-relative">
					<button
						type="button"
						class="btn-close position-absolute me-3"
						style="right: 0"
						data-bs-dismiss="modal"
						aria-label="Close"
					></button>

					<div v-if="signIn" class="p-0">
						<div class="mb-4">
							<h1 class="mb-1 fw-bold">Login</h1>
							<span
								>Don’t have an account?
								<a href="#" @click="signIn = false" class="ms-1"
									>Sign up</a
								></span
							>
						</div>
						<!-- Form -->
						<form
							@submit.prevent="sumitLogin()"
							class="needs-validation"
							novalidate
						>
							<!-- Username -->
							<div class="mb-3">
								<label for="email" class="form-label"
									>Email</label
								>
								<input
									type="email"
									id="email"
									class="form-control"
									name="email"
									placeholder="Email address here"
									required
									v-model="form.email"
								/>
							</div>
							<!-- Password -->
							<div class="mb-3">
								<label for="password" class="form-label">
									Password
								</label>
								<input
									type="password"
									class="form-control"
									name="password"
									placeholder="**************"
									required
									v-model="form.password"
								/>
							</div>
							<p
								v-if="loginError != null"
								class="alert alert-danger p-3"
							>
								{{ loginError }}
							</p>
							<!-- Checkbox -->
							<div
								class="d-lg-flex justify-content-between align-items-center mb-4"
							>
								<div class="form-check">
									<input
										type="checkbox"
										class="form-check-input"
										id="rememberme"
									/>
									<label
										class="form-check-label"
										for="rememberme"
										>Remember me</label
									>
								</div>
								<div>
									<a>Forgot your password?</a>
								</div>
							</div>
							<div>
								<!-- Button -->
								<div class="d-grid">
									<button
										type="submit"
										class="btn btn-primary"
										:class="loadingReg ? 'disabled' : ''"
									>
										<span v-if="!loadingReg"> Login </span>
										<span v-else>
											<span
												class="spinner-grow spinner-grow-sm"
												role="status"
												aria-hidden="true"
											></span>
											Loading...
										</span>
									</button>
								</div>
							</div>
						</form>
					</div>

					<div v-else>
						<div class="mb-4">
							<h1 class="mb-1 fw-bold">Sign up</h1>
							<span
								>Already have an account?
								<a @click="signIn = true" class="ms-1"
									>Login</a
								></span
							>
						</div>
						<!-- Form -->
						<form
							@submit.prevent="register()"
							class="needs-validation"
							novalidate
						>
							<!-- Username -->
							<div class="mb-3">
								<label for="name" class="form-label"
									>Name</label
								>
								<input
									type="text"
									id="name"
									class="form-control"
									name="name"
									placeholder="Enter Name"
									required
									v-model="form.name"
								/>
							</div>
							<!-- Email -->
							<div class="mb-3">
								<label for="email" class="form-label"
									>Email</label
								>
								<input
									type="email"
									id="email"
									class="form-control"
									name="email"
									placeholder="Email address here"
									required
									v-model="form.email"
								/>
							</div>
							<!-- Password -->
							<div class="mb-3">
								<label for="password" class="form-label"
									>Password</label
								>
								<input
									type="password"
									class="form-control"
									name="password"
									placeholder="**************"
									required
									v-model="form.password"
								/>
							</div>
							<div class="mb-3">
								<label for="password" class="form-label"
									>Confirm password</label
								>
								<input
									type="password"
									id="password"
									class="form-control"
									name="password"
									placeholder="**************"
									required
									v-model="form.cPassword"
								/>
							</div>
							<p
								v-if="regError != null"
								class="alert alert-danger p-3"
							>
								{{ regError }}
							</p>
							<!-- Checkbox -->
							<div class="mb-3">
								<div class="form-check">
									<input
										type="checkbox"
										class="form-check-input"
										id="agreeCheck"
										required
									/>
									<label
										class="form-check-label"
										for="agreeCheck"
										><span
											>I agree to the
											<a href="/terms-condition"
												>Terms of Service </a
											>and
											<a href="terms-condition"
												>Privacy Policy.</a
											></span
										></label
									>
								</div>
							</div>

							<div>
								<!-- Button -->
								<div class="d-grid">
									<button
										type="submit"
										class="btn btn-primary"
										:class="loadingReg ? 'disabled' : ''"
									>
										<span v-if="!loadingReg">
											Create Account
										</span>
										<span v-else>
											<span
												class="spinner-grow spinner-grow-sm"
												role="status"
												aria-hidden="true"
											></span>
											Loading...
										</span>
									</button>
								</div>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
