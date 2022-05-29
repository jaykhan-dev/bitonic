<template>
  <section class="dark:bg-black dark:text-white dark:duration-300 p-2">
    <div class="flex justify-center">
      <div class="container mt-20">
        <div
          class="lg:flex justify-between items-center p-4 bg-gradient-to-r from-blue-600 to-purple-500 rounded-xl shadow-xl my-8 text-white"
          v-motion-slide-left
        >
          <h1 class="lg:text-6xl text-4xl font-bold">Data</h1>
          <p>Follow the charts for live updates</p>
          <lottie-player
            src="https://assets1.lottiefiles.com/packages/lf20_qvqmfpfe.json"
            background="transparent"
            speed="1"
            loop
            autoplay
            style="width: 100px; height: 100px"
            class=""
          ></lottie-player>
        </div>
        <BitcoinBlockchain />
      </div>
    </div>
  </section>
</template>

<script setup>
import BitcoinBlockchain from "../components/BitcoinBlockchain.vue";
import { onMounted } from "vue";

onMounted(() => {
  window.scrollTo(0, 0);
});
</script>
