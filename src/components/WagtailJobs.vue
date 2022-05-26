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
      <div>
        <h3>Tags</h3>
        <div>
          <ul></ul>
        </div>
      </div>
    </div>
    <div v-for="job in jobs.items" :key="job.id" class="my-2" v-motion-fade>
      <div
        class="border rounded-xl p-2 border-gray-700 dark:border-opacity-25 grid lg:grid-cols-5 gap-4 hover:bg-gray-800 hover:text-white w-full duration-300"
      >
        <!-- COL -->
        <div class="flex items-center space-x-2">
          <img
            v-if="job.company_logo_small"
            :src="job.company_logo_small.url"
            :width="job.company_logo_small.width / 2"
            :height="job.company_logo_small.height"
            alt=""
          />
          <p>{{ job.title }}</p>
        </div>
        <!-- COL -->
        <div class="items-center space-x-2">
          <p class="font-bold">{{ job.company }}</p>
          <p class="text-green-500">({{ job.contact }})</p>
        </div>
        <!-- COL -->
        <div class="flex items-center lg:justify-evenly space-x-2">
          <p>
            <i class="fa-solid fa-eye"></i>
          </p>
          <p><i class="fa-solid fa-heart"></i></p>
          <p>{{ job.date }}</p>
        </div>
        <!-- COL -->
        <div class="flex space-x-8 items-center">
          <p>Location:</p>
          <p>Salary:</p>
        </div>
        <!-- COL -->
        <div class="lg:flex items-center justify-end">
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
</template>

<script setup>
import { onMounted, computed } from "vue";
import { JobsStore } from "../stores/JobsStore";

import LoadingScreen from "../components/LoadingScreen.vue";

const store = JobsStore();
const jobs = computed(() => {
  return store.jobs;
});
onMounted(() => {
  store.fetchBitcoinJobs();
  window.scrollTo(0, 0);
});
</script>
