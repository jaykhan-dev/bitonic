<template>
  <section class="dark:bg-gray-900 dark:text-white dark:duration-300">
    <div class="lg:h-screen flex justify-center">
      <div class="container mt-20">
        <div>
          <h1 class="lg:text-6xl text-4xl font-bold">Charts</h1>
          <p>Follow the charts for live updates</p>
          <BitcoinBlockchain />
          <AltCoins />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import BitcoinBlockchain from "../components/BitcoinBlockchain.vue";
import AltCoins from "../components/AltCoins.vue";
</script>
