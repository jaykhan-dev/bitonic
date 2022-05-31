<template>
  <div v-if="loading">
    <LoadingScreen />
  </div>
  <div class="h-screen dark:bg-black dark:text-white grid place-items-center">
    {{ item.title }}
    {{ item.date }}
  </div>
</template>

<script>
import axios from "axios";
import LoadingScreen from "../components/LoadingScreen.vue";
const API_ROOT = "https://khanquest.herokuapp.com/api/v2/pages/";

export default {
  name: "JobPage",
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
    getJob() {
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
    this.getJob();
    window.scrollTo(0, 0);
  },
};
</script>
