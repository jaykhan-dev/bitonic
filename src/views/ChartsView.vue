<template>
  <section class="dark:bg-gray-900 dark:text-white dark:duration-300">
    <div class="flex justify-center">
      <div class="container mt-20">
        <div class="relative" v-motion-slide-left>
          <h1 class="lg:text-6xl text-4xl font-bold">Charts</h1>
          <p>Follow the charts for live updates</p>
          <lottie-player
            src="https://assets1.lottiefiles.com/packages/lf20_qvqmfpfe.json"
            background="transparent"
            speed="1"
            loop
            autoplay
            style="width: 100px; height: 100px"
            class="absolute bottom-0 right-0"
          ></lottie-player>
        </div>
        <BitcoinBlockchain />
        <AltCoins />
      </div>
    </div>
  </section>
</template>

<script setup>
import BitcoinBlockchain from "../components/BitcoinBlockchain.vue";
import AltCoins from "../components/AltCoins.vue";
</script>
