import { defineStore } from "pinia";
import axios from "axios";

export const NewsStore = defineStore("BitcoinNewsStore", {
  state: () => ({
    news: [],
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
      } catch (error) {
        alert(error);
        console.log(error);
      }
    },
  },
});
