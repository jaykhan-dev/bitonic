<template>
  <div v-if="store.loading == true">
    <LoadingScreen />
  </div>
  <div class="grid lg:grid-cols-3 gap-4">
    <div v-for="article in articles.items" :key="article.id">
      <div
        class="border dark:border-gray-700 hover:bg-gray-700 duration-300 hover:shadow-2xl hover:-translate-y-2 hover:text-white p-2 rounded-xl"
        v-motion-fade
      >
        <img
          v-if="article.bitcoinlearn_thumbnail_api"
          :src="article.bitcoinlearn_thumbnail_api.url"
          :width="article.bitcoinlearn_thumbnail_api.width"
          :height="article.bitcoinlearn_thumbnail_api.height"
          alt=""
        />
        <h2 class="lg:text-4xl font-bold my-4">{{ article.title }}</h2>
        <p class="my-4 text-gray-400">{{ article.intro }}</p>

        {{ article.data }}
        <div class="flex justify-between items-center text-sm uppercase">
          <p>By: {{ article.author }}</p>
          <router-link :to="/learn/ + article.meta.slug">
            <button
              class="p-2 px-4 bg-blue-500 hover:bg-green-500 duration-300 rounded-xl text-white"
            >
              Read Article
            </button>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import LoadingScreen from "../components/LoadingScreen.vue";
import { onMounted, computed } from "vue";
import { LearnStore } from "../stores/LearnStore";

const store = LearnStore();
const articles = computed(() => {
  return store.articles;
});
onMounted(() => {
  store.fetchArticles();
});
</script>
