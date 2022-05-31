<template>
  <section class="dark:bg-black dark:text-white dark:duration-300 p-2">
    <div class="lg:h-screen flex justify-center">
      <div class="container mt-20">
        <div
          class="lg:flex justify-between items-center p-4 bg-gradient-to-r from-blue-600 to-purple-500 rounded-xl shadow-xl my-8 text-white"
          v-motion-slide-left
        >
          <h1 class="lg:text-6xl text-4xl font-bold">Learn</h1>
          <p>Learn how Bitcoin can bring you financial freedom</p>
          <lottie-player
            src="https://assets3.lottiefiles.com/packages/lf20_yjwqaud8.json"
            background="transparent"
            speed="1"
            loop
            autoplay
            style="width: 100px; height: 100px"
            class=""
          ></lottie-player>
        </div>
        <!-- WAGTAIL LEARN -->
        <WagtailLearn />
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted } from "vue";
import WagtailLearn from "../components/WagtailAPI/WagtailLearn.vue";

onMounted(() => {
  window.scrollTo(0, 0);
});
</script>
