<template>
  <div class="container my-20">
    <div v-if="store.loading == true">
      <LoadingScreen />
    </div>
    <!-- SEARCH -->
    <div>
      <h2 class="lg:text-4xl font-bold my-8">Search</h2>
      <div class="grid lg:grid-cols-2 gap-4">
        <div>
          <h3 class="text-gray-500">Job title, keywords, company</h3>
          <input
            type="text"
            name=""
            id=""
            class="w-full dark:bg-gray-900 p-2 border rounded-xl hover:shadow my-4"
          />
        </div>
        <!-- SEARCH LOCATION -->
        <div>
          <h3 class="text-gray-500">Location</h3>
          <input
            type="text"
            name=""
            id=""
            class="w-full dark:bg-gray-900 p-2 border rounded-xl hover:shadow my-4"
          />
        </div>
      </div>
    </div>
    <div class="grid lg:grid-cols-3 mt-20 gap-4">
      <!-- COL -->
      <div class="">
        <h3 class="lg:text-4xl text-2xl font-bold mb-4 text-left">Tags</h3>
        <div
          class="text-2xl dark:bg-gray-900 bg-gray-200 rounded-xl p-4 py-8 space-y-8"
        >
          <input
            type="checkbox"
            id=""
            name="Design"
            value=""
            class="mx-4 w-4 h-4"
          />
          <label for="Design">Design</label><br />
          <input
            type="checkbox"
            id=""
            name="Engineering"
            value=""
            class="mx-4 w-4 h-4"
          />
          <label for="Engineering">Engineering</label><br />
          <input
            type="checkbox"
            id=""
            name="Full-stack"
            value=""
            class="mx-4 w-4 h-4"
          />
          <label for="Full-stack">Full Stack</label>
        </div>
      </div>
      <!-- COL -->
      <div class="lg:col-span-2 mt-12">
        <div v-for="job in jobs.items" :key="job.id" class="my-2" v-motion-fade>
          <div
            class="border rounded-xl p-2 border-gray-700 dark:border-opacity-25 grid hover:bg-gray-800 hover:text-white w-full duration-300 relative"
          >
            <div class="flex items-center space-x-4">
              <img
                v-if="job.company_logo_small"
                :src="job.company_logo_small.url"
                :width="job.company_logo_small.width"
                :height="job.company_logo_small.height"
                alt=""
              />
              <div>
                <p class="font-bold">{{ job.company }}</p>
                <h2 class="text-2xl font-bold">{{ job.title }}</h2>

                <p class="text-green-500">Category</p>
              </div>
            </div>
            <div
              class="lg:flex justify-between items-center border-t border-gray-700 my-4 py-4"
            >
              <p>{{ job.location }}</p>

              <p>{{ job.date }}</p>

              <i class="fa-solid fa-heart absolute top-2 right-2 text-4xl"></i>
              <p>{{ job.salary }}</p>

              <router-link :to="/jobs/ + job.meta.slug">
                <button
                  class="p-2 px-4 rounded-xl border hover:bg-green-500 duration-300"
                >
                  See more
                </button>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, computed } from "vue";
import { JobsStore } from "../../stores/JobsStore";

import LoadingScreen from "../LoadingScreen.vue";

const store = JobsStore();
const jobs = computed(() => {
  return store.jobs;
});
onMounted(() => {
  store.fetchBitcoinJobs();
  window.scrollTo(0, 0);
});
</script>
