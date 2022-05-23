<template>
  <section class="dark:bg-gray-900 dark:text-white dark:duration-300 p-2">
    <div class="lg:h-screen flex justify-center">
      <div class="container mt-20">
        <div
          class="lg:flex justify-between items-center p-4 bg-gradient-to-r from-blue-600 to-purple-500 rounded-xl shadow-xl my-8 text-white"
          v-motion-slide-left
        >
          <h1 class="lg:text-6xl text-4xl font-bold">
            Connect your Lightning wallet
          </h1>
          <lottie-player
            src="https://assets1.lottiefiles.com/private_files/lf30_0vn96xcf.json"
            background="transparent"
            speed="1"
            loop
            autoplay
            style="width: 100px; height: 100px"
          ></lottie-player>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted } from "vue";

onMounted(() => {
  window.scrollTo(0, 0);
});
</script>
