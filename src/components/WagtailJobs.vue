<template>
  <div class="container my-20">
    <div v-if="store.loading == true">
      <LoadingScreen />
    </div>
    <div v-for="job in jobs.items" :key="job.id" class="my-2" v-motion-fade>
      <div
        class="border rounded-xl p-2 border-gray-700 dark:border-opacity-25 grid lg:grid-cols-5 gap-4 hover:bg-gray-800 hover:text-white w-full"
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
        <div class="flex items-center space-x-2">
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
          <p>Applied:</p>
          <p>Earned:</p>
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
