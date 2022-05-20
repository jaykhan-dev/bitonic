<template>
  <div class="mt-20">
    <h3 class="lg:text-2xl font-bold">AltCoins</h3>
    <div
      class="grid border rounded-xl dark:border-gray-500"
      v-for="info in altcoins"
      :key="info.id"
    >
      <!-- COL -->
      <p>{{ info.data.rank }}</p>
      <p>{{ info.data.name }}</p>
      <p>{{ info.data.price_usd }}</p>
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
