import { defineStore } from "pinia";
import axios from "axios";

export const AltCoinsStore = defineStore("Coinlore", {
  state: () => ({
    altcoins: [],
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
          "https://api.coinlore.net/api/tickers/?start=1&limit=100"
        );
        this.altcoins = data.data;
      } catch (error) {
        alert(error);
        console.log(error);
      }
    },
  },
});
