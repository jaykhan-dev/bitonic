<template>
  <div v-if="store.loading == true">
    <LoadingScreen />
  </div>
  <div class="grid lg:grid-cols-3 gap-4">
    <div v-for="story in news.items" :key="story.id" class="my-2">
      <div
        class="border border-gray-600 p-2 rounded-xl hover:bg-gray-800 hover:text-white duration-300 hover:shadow"
        v-motion-fade
      >
        <img
          v-if="story.news_thumbnail_api"
          :src="story.news_thumbnail_api.url"
          :width="story.news_thumbnail_api.width"
          :height="story.news_thumbnail_api.height"
          alt=""
        />
        <h2 class="lg:text-4xl font-bold my-4">{{ story.title }}</h2>
        <p class="my-4 text-gray-400">{{ story.intro }}</p>

        {{ story.data }}
        <div class="flex justify-between uppercase text-sm items-center">
          <p class="leading-4 text-green-500">By: {{ story.author }}</p>
          <router-link :to="/news/ + story.meta.slug">
            <button class="p-2 px-4 bg-blue-500 hover:bg-green-500 rounded-xl">
              Read Story
            </button>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import LoadingScreen from "../LoadingScreen.vue";
import { onMounted, computed } from "vue";
import { NewsStore } from "../../stores/NewsStore";

const store = NewsStore();
const news = computed(() => {
  return store.news;
});
onMounted(() => {
  store.fetchBitcoinNews();
});
</script>
