<template>
  <h2 class="lg:text-4xl font-bold mt-20 my-4">AltCoins</h2>
  <div class="border dark:border-white dark:border-opacity-20 rounded-xl p-2">
    <div class="grid grid-cols-4 p-2">
      <h3>Rank</h3>
      <h3>Coin</h3>
      <h3>Price</h3>
      <h3></h3>
    </div>
    <div
      class="border-b dark:border-b-gray-100 dark:border-opacity-10 justify-between p-2"
      v-for="info in altcoins.data"
      :key="info.id"
      v-motion-fade
    >
      <div class="grid grid-cols-4 space-x-2">
        <p>{{ info.rank }}</p>
        <p>{{ info.name }}</p>
        <p>{{ info.price_usd }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, computed } from "vue";
import { AltCoinsStore } from "../stores/AltCoinsStore";

const store = AltCoinsStore();
const altcoins = computed(() => {
  return store.altcoins;
});
onMounted(() => {
  store.fetchAltCoinsInfo();
});
</script>
