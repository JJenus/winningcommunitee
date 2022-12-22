<template>
	<div class="card">
		<!-- Card header -->
		<div class="card-header">
			<h3 class="mb-0">Profile Details</h3>
			<p class="mb-0">
				You have full control to manage your own account setting.
			</p>
		</div>
		<!-- Card body -->
		<div class="card-body">
			<div class="d-lg-flex align-items-center justify-content-between">
				<div class="d-flex align-items-center mb-4 mb-lg-0">
					<img
						src="../assets/images/avatar/avatar-3.jpg"
						id="img-uploaded"
						class="avatar-xl rounded-circle"
						alt=""
					/>
					<div class="ms-3">
						<h4 class="mb-0">Your avatar</h4>
						<p class="mb-0">
							PNG or JPG no bigger than 800px wide and tall.
						</p>
					</div>
				</div>
				<div>
					<a href="#" class="btn btn-outline-white btn-sm">Update</a>
					<a href="#" class="btn btn-outline-danger btn-sm">Delete</a>
				</div>
			</div>
			<hr class="my-5" />
			<div>
				<h4 class="mb-0">Personal Details</h4>
				<p class="mb-4">Edit your personal information and address.</p>
				<!-- Form -->
				<form class="row">
					<!-- First name -->
					<div class="mb-3 col-12 col-md-6">
						<label class="form-label" for="fname">First Name</label>
						<input
							type="text"
							id="fname"
							class="form-control"
							placeholder="First Name"
							required
						/>
					</div>
					<!-- Last name -->
					<div class="mb-3 col-12 col-md-6">
						<label class="form-label" for="lname">Last Name</label>
						<input
							type="text"
							id="lname"
							class="form-control"
							placeholder="Last Name"
							required
						/>
					</div>
					<!-- Phone -->
					<div class="mb-3 col-12 col-md-6">
						<label class="form-label" for="phone">Phone</label>
						<input
							type="text"
							id="phone"
							class="form-control"
							placeholder="Phone"
							required
						/>
					</div>
					<!-- Birthday -->
					<div class="mb-3 col-12 col-md-6">
						<label class="form-label" for="birth">Birthday</label>
						<input
							class="form-control flatpickr"
							type="text"
							placeholder="Birth of Date"
							id="birth"
							name="birth"
						/>
					</div>
					<!-- Address -->
					<div class="mb-3 col-12 col-md-6">
						<label class="form-label" for="address"
							>Address Line 1</label
						>
						<input
							type="text"
							id="address"
							class="form-control"
							placeholder="Address"
							required
						/>
					</div>
					<!-- Address -->
					<div class="mb-3 col-12 col-md-6">
						<label class="form-label" for="address2"
							>Address Line 2</label
						>
						<input
							type="text"
							id="address2"
							class="form-control"
							placeholder="Address"
							required
						/>
					</div>
					<!-- State -->
					<div class="mb-3 col-12 col-md-6">
						<label class="form-label">State</label>
						<select class="selectpicker" data-width="100%">
							<option value="">Select State</option>
							<option value="1">Gujarat</option>
							<option value="2">Rajasthan</option>
							<option value="3">Maharashtra</option>
						</select>
					</div>
					<!-- Country -->
					<div class="mb-3 col-12 col-md-6">
						<label class="form-label">Country</label>
						<select class="selectpicker" data-width="100%">
							<option value="">Select Country</option>
							<option value="1">India</option>
							<option value="2">UK</option>
							<option value="3">USA</option>
						</select>
					</div>
					<div class="col-12">
						<!-- Button -->
						<button class="btn btn-primary" type="submit">
							Update Profile
						</button>
					</div>
				</form>
			</div>
		</div>
	</div>
</template>
