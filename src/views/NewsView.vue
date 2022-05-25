<template>
  <section class="dark:bg-gray-900 dark:text-white dark:duration-300 p-2">
    <div class="lg:h-screen flex justify-center">
      <div class="lg:w-1/2 mt-20">
        <div
          class="lg:flex justify-between items-center p-4 bg-gradient-to-r from-blue-600 to-purple-500 rounded-xl shadow-xl my-8 text-white"
          v-motion-slide-left
        >
          <h1 class="lg:text-6xl text-4xl font-bold">News</h1>
          <p>Latest news on Bitcoin</p>
          <lottie-player
            src="https://assets1.lottiefiles.com/packages/lf20_oNHjED.json"
            background="transparent"
            speed="1"
            loop
            autoplay
            style="width: 100px; height: 100px"
            class=""
          ></lottie-player>
        </div>
        <!-- WAGTAIL NEWS -->
        <WagtailNews v-motion-fade />
      </div>
    </div>
  </section>
</template>

<script setup>
import WagtailNews from "../components/WagtailNews.vue";
import { onMounted } from "vue";

onMounted(() => {
  window.scrollTo(0, 0);
});
</script>
