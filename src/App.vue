<template>
  <div :class="isDark ? 'dark' : ''" class="">
    <div class="bg-blue-500 fixed top-0 w-full z-50">
      <p class="text-center uppercase font-bold text-white">prototype</p>
    </div>
    <div
      class="fixed top-5 w-full z-50 lg:flex lg:justify-between justify-center text-white bg-black border-b border-white border-opacity-10 p-4"
    >
      <router-link to="/">
        <h1
          id="logo"
          class="logo text-2xl font-bold text-green-600 text-center hover:scale-90 duration-300"
        >
          Sound Bit
        </h1>
      </router-link>
      <div class="space-x-4 uppercase mr-4 flex justify-center items-center">
        <router-link to="/" class="hover:text-green-500 font-bold">
          Jobs
        </router-link>

        <router-link
          to="/about"
          class="hover:text-green-500 border-r border-gray-700 pr-4 font-bold"
        >
          About
        </router-link>
        <!-- GLOBAL -->
        <button type="button" @click="isDark = !isDark" class="">
          <i class="fa-solid fa-sun text-yellow-500 hidden dark:block"></i>
          <i class="fa-solid fa-moon block dark:hidden"></i>
        </button>
        <!-- <router-link to="/search">
          <button>
            <i class="fa-solid fa-magnifying-glass hover:text-green-500"></i>
          </button>
        </router-link> -->
        <router-link to="/wallet">
          <button class="">
            <i class="fa-solid fa-wallet hover:text-green-500"></i>
          </button>
        </router-link>
      </div>
    </div>
    <router-view />
    <FooterComp />
  </div>
</template>

<script>
import FooterComp from "./components/FooterComp.vue";

export default {
  name: "app",
  components: {
    FooterComp,
  },
  data() {
    return {
      isDark: true,
    };
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Alata&family=Baumans&family=Odibee+Sans&family=Outfit&family=Secular+One&family=Share+Tech+Mono&display=swap");
/*
font-family: 'Alata', sans-serif;
font-family: 'Baumans', cursive;
font-family: 'Odibee Sans', cursive;
font-family: 'Outfit', sans-serif;
font-family: 'Secular One', sans-serif;
font-family: 'Share Tech Mono', monospace;
*/
.logo {
  font-family: "Baumans", cursive;
}
h1 {
  font-family: "Alata", sans-serif;
}
p,
h2,
h3 {
  font-family: "Outfit", sans-serif;
}
body,
html {
  display: block;
  width: 100%;
  margin: 0px;
  padding: 0px;
  overflow-x: hidden;
}
</style>
