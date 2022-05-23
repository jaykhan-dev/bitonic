import { defineStore } from "pinia";
import axios from "axios";

export const LearnStore = defineStore("BitcoinLearnStore", {
  state: () => ({
    articles: [],
  }),
  getters: {
    getArticles(state) {
      return state.articles;
    },
  },
  actions: {
    async fetchArticles() {
      try {
        const data = await axios.get(
          "https://khanquest.herokuapp.com/api/v2/pages/?type=BitcoinLearn.BitcoinLearnPage&fields=*"
        );
        this.articles = data.data;
      } catch (error) {
        alert(error);
        console.log(error);
      }
    },
  },
});
