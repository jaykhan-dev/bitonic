<template>
  <nav
    class="lg:fixed lg:left-0 text-white lg:h-screen border-r border-white border-opacity-10 p-2 bg-black z-40"
  >
    <div
      class="grid lg:place-items-start place-items-center mt-12 text-white lg:h-full"
    >
      <div class="grid lg:grid-cols-1 grid-cols-4 text-2xl gap-4">
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
      </div>
    </div>
  </nav>
  <router-view />
</template>

<script>
import { ref } from "vue";
export default {
  setup() {
    let showMenu = ref(false);
    const toggleNav = () => (showMenu.value = !showMenu.value);
    return { showMenu, toggleNav };
  },
};
</script>

<style>
#logo {
  font-family: "Baumans", cursive;
}
</style>
