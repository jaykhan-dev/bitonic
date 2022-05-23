<template>
  <div class="grid lg:grid-cols-4 gap-4">
    <div v-for="article in articles.items" :key="article.id">
      <div
        class="border dark:border-gray-700 hover:bg-gray-700 hover:text-white p-2 rounded-xl"
        v-motion-fade
      >
        <img
          v-if="article.bitcoinlearn_thumbnail_api"
          :src="article.bitcoinlearn_thumbnail_api.url"
          :width="article.bitcoinlearn_thumbnail_api.width"
          :height="article.bitcoinlearn_thumbnail_api.height"
          alt=""
        />
        {{ article.title }}
        {{ article.data }}
        <div>
          <router-link :to="/learn/ + article.meta.slug">
            <button>Read Article</button>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
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
