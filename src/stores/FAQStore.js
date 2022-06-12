import { defineStore } from "pinia";
import axios from "axios";

export const FAQStore = defineStore("BitcoinJobsFAQ", {
  state: () => ({
    faqs: [],
    loading: true,
  }),
  getters: {
    getFAQS(state) {
      return state.faqs;
    },
  },
  actions: {
    async fetchBitcoinJobsFAQ() {
      try {
        const data = await axios.get(
          "https://khanquest.herokuapp.com/api/v2/pages/?type=BitcoinJobs.BitcoinJobsFAQ&fields=*"
        );
        this.faqs = data.data;
        this.loading = false;
      } catch (error) {
        alert(error);
        console.log(error);
      }
    },
  },
});
