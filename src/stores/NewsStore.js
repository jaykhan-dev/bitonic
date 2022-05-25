import { defineStore } from "pinia";
import axios from "axios";

export const NewsStore = defineStore("BitcoinNewsStore", {
  state: () => ({
    news: [],
    loading: true,
  }),
  getters: {
    getBitcoinNews(state) {
      return state.news;
    },
  },
  actions: {
    async fetchBitcoinNews() {
      try {
        const data = await axios.get(
          "https://khanquest.herokuapp.com/api/v2/pages/?type=BitcoinNews.BitcoinNewsPage&fields=*"
        );
        this.news = data.data;
        this.loading = false;
      } catch (error) {
        alert(error);
        console.log(error);
      }
    },
  },
});
