<template>
  <section class="dark:bg-gray-900 dark:text-white dark:duration-300 p-2">
    <div class="lg:h-screen flex justify-center">
      <div class="lg:w-1/2 mt-20">
        <div
          class="lg:flex justify-between items-center p-4 bg-gradient-to-r from-blue-600 to-purple-500 rounded-xl shadow-xl my-8 text-white"
          v-motion-slide-left
        >
          <h1 class="lg:text-6xl text-4xl font-bold">Jobs</h1>
          <p>Curated jobs that payout in Bitcoin</p>
          <lottie-player
            src="https://assets6.lottiefiles.com/private_files/lf30_h03e9pog.json"
            background="transparent"
            speed="1"
            loop
            autoplay
            style="width: 100px; height: 100px"
            class=""
          ></lottie-player>
        </div>
        <!-- WAGTAIL JOBS -->
        <WagtailJobs />
      </div>
    </div>
  </section>
</template>

<script setup>
import WagtailJobs from "../components/WagtailJobs.vue";
</script>
