<template>
  <!-- LOADING SCREEN -->
  <div v-if="store.loading == true">
    <LoadingScreen />
  </div>
  <!-- BITCOIN BLOCKCHAIN API -->
  <div v-for="info in bitcoin" :key="info.id">
    <!-- INTRO INFO -->
    <div class="grid lg:grid-cols-2 gap-4 p-2">
      <!-- COL -->
      <div
        class="border p-2 dark:border-gray-700 rounded-xl hover:shadow-xl duration-300"
      >
        <h2 class="lg:text-4xl font-bold" v-motion-slide-right>About</h2>
        <p class="my-4">
          Perhaps the most revolutionary technology to emerge since the web was
          first introduced in the early 90's.
          <br /><br />
          The Bitcoin Blockchain has seen massive growths but also volatile
          price jumps. What is clear, however, is that the idea of a digital
          currency without a central authority and a fixed supply has taken off.
        </p>
        <p>{{ info.rank }}</p>
        <p>{{ info.msupply }}</p>
        <p>{{ info.csupply }}</p>
      </div>

      <!-- COL -->
      <div
        class="border p-2 dark:border-gray-700 rounded-xl hover:shadow-xl duration-300"
      >
        Bitcoin Data
        {{ info.price_usd }}
        {{ info.percent_change_24h }}
      </div>
      <!-- COL -->
      <div
        class="border p-2 dark:border-gray-700 rounded-xl hover:shadow-xl duration-300"
      >
        dominance
      </div>

      <!-- COL -->
      <div
        class="border p-2 dark:border-gray-700 rounded-xl hover:shadow-xl duration-300"
      >
        Exchanges
      </div>
      <!-- COL -->
      <div
        class="border p-2 dark:border-gray-700 rounded-xl hover:shadow-xl duration-300"
      >
        Mining
      </div>
      <!-- COL -->
      <div
        class="border p-2 dark:border-gray-700 rounded-xl hover:shadow-xl duration-300"
      >
        Resources
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, computed } from "vue";
import { BitcoinStore } from "../stores/BitcoinStore";

import LoadingScreen from "../components/LoadingScreen.vue";

const store = BitcoinStore();
const bitcoin = computed(() => {
  return store.bitcoin;
});
onMounted(() => {
  store.fetchBitcoinInfo();
});
</script>
