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
    data: form.value
  };

  axios
  .request(config)
  .then((res) => {
    console.log(res.data);
    alert("saved")
  })
  .catch((err) => {
    console.log(err);
  });
}
</script>

<template>
  <div class="bg-dark pb-8 pt-xl-6 pt-4">
    <div class="container px-4 px-lg-0">
      <div class="row d-nione justify-content-center">
        <div class="col-12 col-md-6 fs-4 p-4 shadow">
          <h4 class="text-center mb-3 h2 text-light">Contact us</h4>
          <form class="text-light " @submit.prevent="submit()">
            <div class="form-group mb-2">
              <label for="">Email</label>
              <input required v-model="form.email" type="text" class="form-control" />
            </div>
            <div class="form-group mb-2">
              <label for="subject">Subject</label>
              <input required
                v-model="form.subject"
                type="text"
                name="subject"
                class="form-control"
              />
            </div>
            <div class="form-group mb-3">
              <label for="">Message</label>
              <textarea required
                v-model="form.message"
                placeholder="Message here"
                class="form-control"
                rows="6"
                name=""
                id=""
              ></textarea>
            </div>

            <button type="submit" class="btn btn-primary btn-block">
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
