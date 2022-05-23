<template>
  <div v-if="loading">
    <LoadingScreen />
  </div>
  <div
    class="grid place-items-center dark:bg-gray-900 dark:text-white"
    v-motion-fade
  >
    <div
      class="border dark:border-gray-700 rounded-xl dark:bg-black shadow-xl p-4"
    >
      <img
        v-if="item.bitcoinlearn_image_api"
        :src="item.bitcoinlearn_image_api.url"
        :width="item.bitcoinlearn_image_api.width"
        :height="item.bitcoinlearn_image_api.height"
        alt=""
      />
      <div class="lg:flex justify-between p-4 items-center">
        <h2 class="lg:text-4xl text-2xl font-bold">{{ item.title }}</h2>
        <div class="flex space-x-4 items-center">
          <p class="text-sm uppercase">by: {{ item.author }}</p>
          <p class="p-2 px-4 border rounded-xl dark:border-gray-700">
            {{ item.date }}
          </p>
        </div>
      </div>
    </div>

    <div class="dark:bg-gray-900 dark:text-white">
      <div v-for="block in item.content" class="container" :key="block.id">
        <div v-if="block.type == 'heading'">
          <h2
            v-html="block.value"
            class="lg:text-4xl text-2xl tracking-wide font-bold my-2 dark:bg-gray-900 bg-gray-200 p-2"
          ></h2>
        </div>
        <div v-else-if="block.type == 'paragraph'" class="my-2">
          <div v-html="block.value" class="leading-8 tracking-wide"></div>
        </div>
        <div
          v-else-if="block.type == 'code'"
          class="my-4 grid place-items-center w-full"
        >
          <prism
            language="python"
            class="overflow-x-scroll w-full"
            id="prism"
            >{{ block.value.code }}</prism
          >
        </div>
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

<style>
code {
  overflow-x: auto;
}
/*
@media only screen and (max-width: 600px) {
  #prism {
    width: 300px;
  }
}
*/
</style>
