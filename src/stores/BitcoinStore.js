import { defineStore } from "pinia";
import axios from "axios";

export const BitcoinStore = defineStore("BitcoinInfo", {
  state: () => ({
    bitcoin: [],
    loading: true,
  }),
  getters: {
    getBitcoinInfo(state) {
      return state.bitcoin;
    },
  },
  actions: {
    async fetchBitcoinInfo() {
      try {
        const data = await axios.get(
          "https://api.coinlore.net/api/ticker/?id=90"
        );
        this.bitcoin = data.data;
        this.loading = false;
      } catch (error) {
        alert(error);
        console.log(error);
      }
    },
  },
});
