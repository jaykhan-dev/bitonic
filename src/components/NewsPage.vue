<template>
  <div v-if="loading">
    <LoadingScreen />
  </div>
  <div
    class="h-screen dark:bg-gray-900 dark:text-white grid place-items-center"
  >
    <img
      v-if="item.news_image_api"
      :src="item.news_image_api.url"
      alt=""
      :width="item.news_image_api.width"
      :height="item.news_image_api.height"
    />
    <h2 class="lg:text-8xl font-bold">{{ item.title }}</h2>
    <p class="p-2 px-4 border rounded-xl dark:border-gray-700">
      {{ item.date }}
    </p>
    <p>{{ item.author }}</p>
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
