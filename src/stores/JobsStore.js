import { defineStore } from "pinia";
import axios from "axios";

export const JobsStore = defineStore("BitcoinJobs", {
  state: () => ({
    jobs: [],
    loading: true,
  }),
  getters: {
    getJobs(state) {
      return state.jobs;
    },
  },
  actions: {
    async fetchBitcoinJobs() {
      try {
        const data = await axios.get(
          "https://khanquest.herokuapp.com/api/v2/pages/?type=BitcoinJobs.BitcoinJobsPage&fields=*"
        );
        this.jobs = data.data;
        this.loading = false;
      } catch (error) {
        alert(error);
        console.log(error);
      }
    },
  },
});
