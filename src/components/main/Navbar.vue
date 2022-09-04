<script setup>
import { onMounted, ref } from "vue";
import { useRoute, useRouter } from "vue-router";

const env = import.meta.env;

const router = useRouter();
const route = useRoute();

let path = ref("");

onMounted(async () => {
  await router.isReady();
  path.value = route.name;
});
</script>

<style>
  @media(max-width: 576px){
    .float-sm{
      bottom: 0!important;
      right: 0 !important;
      margin-bottom: 10px !important;
      margin-right: 10px !important;
    }
  }
</style>

<template>
  <div class="bg-dark pt-xl-16 pt-lg-10 pt-4">
    <div class="container px-4 px-lg-0">
      <!-- Hero Section -->
      <div class="row align-items-center">
        <div class="col-md-12 py-2 py-xl-0">
          <div class="mb-4 text-center text-xl-center px-md-8 px-lg-19 px-xl-0">
            <!-- Caption -->
            <h1 class="display-2 fw-bold mb-3 text-white ls-sm">
              Winning
              <span class="text-warning"
                ><span class="text-light">-</span> Community</span
              >
            </h1>
            <p class="mb-6 lead text-white-50 pe-lg-6">Football predictions.</p>
            <!-- List -->
            <div class="sticky-top mx-n4">
              <div class="tab d-flex justify-content-center flex-wrap">
                <a
                  href="/free-picks"
                  class="btn fw-bold m-1 m-md-2"
                  :class="path === 'freepicks' ? 'btn-warning' : 'btn-primary'"
                >
                  <div class="d-md-flex">
                    <div class="me-md-2">
                      <img
                        width="24"
                        :src="env.VITE_BASE_URL+'/assets/images/png/ball-dark.png'"
                        alt=""
                      />
                    </div>
                    <span class="d-none d-md-inline">Free picks</span>
                    <small class="d-md-none h4 fw-bold">
                      <small>
                        <small>Free</small>
                      </small>
                    </small>
                  </div>
                </a>

                <a
                  href="/super-picks"
                  class="btn fw-bold m-1 m-md-2"
                  :class="path === 'superpicks' ? 'btn-warning' : 'btn-primary'"
                >
                  <div class="d-md-flex">
                    <div class="me-md-2">
                      <img
                        width="24"
                        :src="env.VITE_BASE_URL+'/assets/images/png/goal-dark.png'"
                        alt=""
                      />
                    </div>
                    <span class="d-none d-md-inline">Super picks</span>
                    <small class="d-md-none h4 fw-bold">
                      <small>
                        <small>Picks</small>
                      </small>
                    </small>
                  </div>
                </a>

                <a
                  href="/telegram"
                  class="btn fw-bold m-1 m-md-2"
                  :class="path === 'telegram' ? 'btn-warning' : 'btn-primary'"
                >
                  <div class="d-md-flex">
                    <div class="me-md-2">
                      <img
                        width="24"
                        :src="env.VITE_BASE_URL+'/assets/images/png/telegram-dark.png'"
                        alt=""
                      />
                    </div>
                    <span class="d-none d-md-inline">Telegram</span>
                    <small class="d-md-none h4 fw-bold">
                      <small>
                        <small>Chat</small>
                      </small>
                    </small>
                  </div>
                </a>

                <a
                  href="/livescores"
                  class="btn fw-bold float-sm position-fixed position-md-relative  m-1 m-md-2"
                  :class="path === 'livescores' ? 'btn-warning' : 'btn-primary'"
                >
                  <div class="d-md-flex">
                    <div class="me-md-2">
                      <img
                        width="24"
                        :src="env.VITE_BASE_URL+'/assets/images/png/live-dark.png'"
                        alt=""
                      />
                    </div>
                    <span class="d-none d-md-inline">Livescores</span>
                    <small class="d-md-none h4 fw-bold">
                      <small>
                        <small>Live</small>
                      </small>
                    </small>
                  </div>
                </a>

                <a
                  href="/contact-us"
                  class="btn fw-bold m-1 m-md-2"
                  :class="path === 'contactus' ? 'btn-warning' : 'btn-primary'"
                >
                  <div class="d-md-flex">
                    <div class="me-md-2">
                      <img
                        width="24"
                        :src="env.VITE_BASE_URL+'/assets/images/png/contact-dark.png'"
                        alt=""
                      />
                    </div>
                    <span class="d-none d-md-inline">Contact</span>
                    <small class="d-md-none h4 fw-bold">
                      <small>
                        <small>Help</small>
                      </small>
                    </small>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
