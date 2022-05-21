<template>
  <h2 class="lg:text-4xl font-bold mt-20 p-2">Bitcoin</h2>
  <div class="grid lg:grid-cols-4 gap-4 p-2" v-motion-fade>
    <!-- COL -->
    <div
      v-for="info in bitcoin"
      :key="info.id"
      class="grid w-full gap-2 uppercase font-bold"
    >
      <!-- 1 -->
      <div class="border rounded-xl border-gray-400 dark:border-opacity-50 p-4">
        <h3 class="text-green-500">Current Price (USD)</h3>
        <p class="lg:text-4xl text-2xl my-2">${{ info.price_usd }}</p>
      </div>
      <!-- 2 -->
      <div class="border rounded-xl border-gray-400 dark:border-opacity-50 p-4">
        <h3 class="text-green-500">Market cap</h3>
        <p class="lg:text-4xl my-2">${{ info.market_cap_usd }}</p>
      </div>
      <!-- 3 -->
      <div class="border rounded-xl border-gray-400 dark:border-opacity-50 p-4">
        <h3 class="text-green-500">Price change (24H)</h3>
        <p class="lg:text-4xl my-2">${{ info.percent_change_24h }}</p>
      </div>
    </div>
    <!-- CHART -->
    <div
      class="lg:col-span-3 border rounded-xl border-gray-400 dark:border-opacity-50 border-opacity-20 p-4"
    >
      <h3>Chart</h3>
    </div>
  </div>
</template>

<script setup>
import { onMounted, computed } from "vue";
import { BitcoinStore } from "../stores/BitcoinStore";

const store = BitcoinStore();
const bitcoin = computed(() => {
  return store.bitcoin;
});
onMounted(() => {
  store.fetchBitcoinInfo();
});
</script>
