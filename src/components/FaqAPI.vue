<template>
  <div v-if="store.loading == true">
    <LoadingScreen />
  </div>
  <section
    class="h-screen dark:bg-black dark:text-white flex justify-center py-20"
  >
    <div v-for="faq in faqs.items" :key="faq.id" class="container">
      <div
        class="lg:flex justify-between items-center p-4 bg-gradient-to-r from-blue-600 to-purple-500 rounded-xl shadow-xl my-8 text-white"
        v-motion-slide-left
      >
        <h1 class="lg:text-6xl text-4xl font-bold">{{ faq.title }}</h1>

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

      <div
        v-for="block in faq.content"
        :key="block.id"
        class="text-center"
        v-motion-fade
        :delay="500"
      >
        <div v-if="block.type == 'question'">
          <h2 v-html="block.value" class="lg:text-4xl text-2xl my-4"></h2>
        </div>
        <div v-if="block.type == 'answer'">
          <p v-html="block.value" class=""></p>
        </div>
        <div></div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted, computed } from "vue";
import { FAQStore } from "../stores/FAQStore";

import LoadingScreen from "./LoadingScreen.vue";

const store = FAQStore();

const faqs = computed(() => {
  return store.faqs;
});
onMounted(() => {
  store.fetchBitcoinJobsFAQ();
  window.scrollTo(0, 0);
});
</script>

<style></style>
