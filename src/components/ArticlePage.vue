<template>
  <div v-if="loading">
    <LoadingScreen />
  </div>
  <div
    class="grid place-items-center h-screen dark:bg-gray-900 dark:text-white"
    v-motion-fade
  >
    <img
      v-if="item.bitcoinlearn_image_api"
      :src="item.bitcoinlearn_image_api.url"
      :width="item.bitcoinlearn_image_api.width"
      :height="item.bitcoinlearn_image_api.height"
      alt=""
    />
    <h2 class="lg:text-8xl font-bold">{{ item.title }}</h2>

    {{ item.data }}
  </div>
</template>

<script>
import axios from "axios";
import LoadingScreen from "../components/LoadingScreen.vue";
const API_ROOT = "https://khanquest.herokuapp.com/api/v2/pages/";

export default {
  name: "ArticlePage",
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
        .catch((error) => alert(error));
    },
  },
  mounted() {
    this.getArticle();
    window.scrollTo(0, 0);
  },
};
</script>
