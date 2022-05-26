<template>
  <div :class="isDark ? 'dark' : ''" class="">
    <div
      class="fixed top-0 w-full z-50 lg:flex lg:justify-between justify-center text-white bg-black border-b border-white border-opacity-10 p-4"
    >
      <router-link to="/">
        <h1 id="logo" class="logo text-2xl font-bold text-green-600">
          Bit & Tonic
        </h1>
      </router-link>
      <div class="space-x-4 text-xl mr-4">
        <router-link to="/news">
          <i class="fa-solid fa-newspaper hover:text-green-500"></i>
        </router-link>
        <router-link to="/data">
          <i class="fa-solid fa-chart-line hover:text-green-500"></i>
        </router-link>
        <router-link to="/learn">
          <i class="fa-solid fa-building-columns hover:text-green-500"></i>
        </router-link>
        <router-link to="/jobs">
          <i class="fa-solid fa-gears hover:text-green-500"></i>
        </router-link>
        <button type="button" @click="isDark = !isDark">
          <i class="fa-solid fa-sun text-yellow-500 hidden dark:block"></i>
          <i class="fa-solid fa-moon block dark:hidden"></i>
        </button>
        <router-link to="/search">
          <button>
            <i class="fa-solid fa-magnifying-glass hover:text-green-500"></i>
          </button>
        </router-link>
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
