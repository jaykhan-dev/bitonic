<template>
  <div :class="isDark ? 'dark' : ''" class="">
    <div
      class="fixed top-0 w-full z-50 flex justify-between text-white bg-black border-b border-white border-opacity-10 p-2"
    >
      <router-link to="/">
        <h1 id="logo" class="logo text-2xl font-bold text-green-600">
          Bitonic
        </h1>
      </router-link>
      <div class="space-x-4 text-xl">
        <button type="button" @click="isDark = !isDark">
          <i class="fa-solid fa-sun text-yellow-500 hidden dark:block"></i>
          <i class="fa-solid fa-moon block dark:hidden"></i>
        </button>
        <router-link to="/search">
          <button>
            <i class="fa-solid fa-magnifying-glass"></i>
          </button>
        </router-link>
        <router-link to="/wallet">
          <button class="">
            <i class="fa-solid fa-wallet"></i>
          </button>
        </router-link>
      </div>
    </div>
    <NavSide />
    <FooterComp />
  </div>
</template>

<script>
import FooterComp from "./components/FooterComp.vue";
import NavSide from "./components/NavSide.vue";

export default {
  name: "app",
  components: {
    NavSide,
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
  font-family: "Odibee Sans", cursive;
}
p {
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
