import { defineStore } from "pinia";
import axios from "axios";

export const AltCoinsStore = defineStore("Coinlore", {
  state: () => ({
    altcoins: [],
    loading: true,
  }),
  getters: {
    getAltCoinsInfo(state) {
      return state.altcoins;
    },
  },
  actions: {
    async fetchAltCoinsInfo() {
      try {
        const data = await axios.get(
          "https://api.coinlore.net/api/tickers/?start=1&limit=50"
        );
        this.altcoins = data.data;
        this.loading = false;
      } catch (error) {
        alert(error);
        console.log(error);
      }
    },
  },
});
