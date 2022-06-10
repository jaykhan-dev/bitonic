<template>
  <div v-if="loading">
    <LoadingScreen />
  </div>
  <div class="dark:bg-black dark:text-white py-20 flex justify-center p-2">
    <div class="grid lg:grid-cols-3 lg:w-2/3 gap-4">
      <!-- COL -->
      <div class="lg:col-span-2">
        <img
          v-if="item.company_logo_small"
          :src="item.company_logo_small.url"
          :width="item.company_logo_small.width"
          :height="item.company_logo_small.height"
          alt=""
          class="my-8"
        />
        <h2 class="lg:text-6xl text-4xl font-bold my-4">
          {{ item.title }}
        </h2>
        <p class="text-xl my-4">{{ item.intro }}</p>
        <div class="lg:flex lg:space-x-8">
          <p>Salary:</p>
          <p>Applicants:</p>
          <p>{{ item.date }}</p>
        </div>
        <!-- CONTENT -->
        <div v-for="block in item.content" class="w-full" :key="block.id">
          <div v-if="block.type == 'heading'" class="mt-8">
            <h2
              v-html="block.value"
              class="lg:text-4xl text-2xl tracking-wide font-bold my-2"
            ></h2>
          </div>
          <div v-else-if="block.type == 'paragraph'" class="my-2">
            <div v-html="block.value" class="leading-8 tracking-wide"></div>
          </div>
        </div>
      </div>
      <!-- COL -->
      <div class="">
        <h2 class="lg:text-4xl font-bold text-center my-8">Apply here</h2>
        <form
          action=""
          class="bg-gray-900 py-8 p-4 border rounded-xl border-gray-800 shadow-xl text-white"
        >
          <input
            type="text"
            class="w-full bg-gray-900 border-b p-2 my-4"
            placeholder="Name"
          />
          <input
            type="email"
            class="w-full bg-gray-900 border-b p-2 my-4"
            placeholder="Email"
          />
          <input
            type="phone"
            class="w-full bg-gray-900 border-b p-2 my-4"
            placeholder="Phone"
          />
          <input
            type="link"
            class="w-full bg-gray-900 border-b p-2 my-4"
            placeholder="Portfolio link"
          />
          <input
            type="link"
            class="w-full bg-gray-900 border-b p-2 my-4"
            placeholder="Linkedin"
          />
          <div class="my-4">
            <p class="my-2">Resume:</p>
            <input
              type="file"
              id="myFile"
              name="Resume"
              class="border-2 rounded-2xl p-2 bg-blue-600 hover:bg-green-600 duration-300 w-full"
            />
          </div>
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            placeholder="Cover letter (optional)"
            class="w-full bg-black p-2 border rounded-xl"
          ></textarea>
          <button
            class="p-2 border bg-green-500 hover:bg-black duration-300 rounded-xl w-full my-4"
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import LoadingScreen from "../../components/LoadingScreen.vue";
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
