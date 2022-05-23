<template>
  <div v-if="loading">
    <LoadingScreen />
  </div>
  <div class="dark:bg-gray-900 dark:text-white grid place-items-center">
    <div
      class="border p-4 dark:border-gray-700 rounded-xl shadow bg-black mt-20 text-white"
      v-motion-roll-top
    >
      <img
        v-if="item.news_image_api"
        :src="item.news_image_api.url"
        alt=""
        class=""
        :width="item.news_image_api.width"
        :height="item.news_image_api.height"
      />
      <div class="lg:flex justify-between items-center p-4">
        <h2 class="text-4xl font-bold my-4">{{ item.title }}</h2>
        <div class="flex items-center space-x-4">
          <p class="text-sm uppercase">by: {{ item.author }}</p>
          <p class="p-2 px-4 border rounded-xl dark:border-gray-700">
            {{ item.date }}
          </p>
        </div>
      </div>
    </div>

    <div class="mt-20" v-motion-fade>
      <div v-for="block in item.content" class="" :key="block.id">
        <div v-if="block.type == 'heading'">
          <h2
            v-html="block.value"
            class="lg:text-4xl text-2xl tracking-wide font-bold my-2 p-2"
          ></h2>
        </div>
        <div v-else-if="block.type == 'paragraph'" class="my-2 p-4">
          <div v-html="block.value" class="leading-8 tracking-wide"></div>
        </div>
        <div
          v-else-if="block.type == 'code'"
          class="my-4 grid place-items-center w-full"
        ></div>
        <div
          v-else-if="block.type == 'image'"
          class="my-4 grid place-items-center w-full"
        >
          <img :src="block.value.url" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import LoadingScreen from "../components/LoadingScreen.vue";
const API_ROOT = "https://khanquest.herokuapp.com/api/v2/pages/";

export default {
  name: "NewsPage",
  components: {
    LoadingScreen,
  },
  data() {
    return {
      item: [],
      loading: true,
    };
  },
  methods: {
    getArticle() {
      axios
        .get(API_ROOT + this.$route.params.slug)
        .then(
          function (response) {
            this.item = response.data;
            this.loading = false;
          }.bind(this)
        )
        .catch((error) => console.log(error));
    },
  },
  mounted() {
    this.getArticle();
    window.scrollTo(0, 0);
  },
};
</script>
