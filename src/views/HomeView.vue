<script setup>
import HeroSection from "../components/HeroSection.vue";
</script>

<template>
  <main>
    <HeroSection />

    <!-- PURPOSE OF BITONIC -->
    <section class="dark:bg-black dark:text-white flex justify-center p-2">
      <div class="container grid lg:grid-cols-2 gap-4 lg:w-2/4 my-20">
        <!-- SECTION HEADING -->
        <div class="lg:w-1/2 grid place-items-center" v-motion-slide-left>
          <h2 class="text-6xl font-bold my-4">Areas of interest</h2>
          <p>
            Explore the resources, jobs, and learning material that has been
            curated and vetted.
          </p>
          <lottie-player
            src="https://assets8.lottiefiles.com/packages/lf20_o7mksxe9.json"
            background="transparent"
            speed="1"
            loop
            autoplay
            style="width: 200px; height: 200px"
            class=""
          ></lottie-player>
        </div>
        <!-- COL -->
        <router-link to="/news" class="hover:scale-95 duration-300">
          <div
            class="border p-4 border-gray-600 rounded-xl relative text-white h-full"
            id="interest_1"
          >
            <i class="fa-solid fa-newspaper hover:text-green-500 text-6xl"></i>
            <div class="absolute bottom-4">
              <h3 class="lg:text-4xl text-2xl font-bold my-4 text-green-500">
                News
              </h3>
              <p>Get the latest news from a variety of sources</p>
            </div>
          </div>
        </router-link>
        <!-- COL -->
        <router-link to="/data" class="hover:scale-95 duration-300">
          <div
            class="border p-4 border-gray-600 rounded-xl relative h-64"
            id="interest_2"
          >
            <i class="fa-solid fa-chart-line hover:text-green-500 text-6xl"></i>
            <div class="absolute bottom-0">
              <h3 class="lg:text-4xl text-2xl font-bold my-4 text-green-500">
                Data
              </h3>
              <p>Follow the latest prices and data</p>
            </div>
          </div>
        </router-link>
        <!-- COL -->
        <router-link to="/learn" class="hover:scale-95 duration-300">
          <div
            class="border p-4 border-gray-600 rounded-xl relative h-64 hover:scale-95 duration-300"
            id="interest_3"
          >
            <i
              class="fa-solid fa-building-columns hover:text-green-500 text-6xl"
            ></i>
            <div class="absolute bottom-2">
              <h3 class="lg:text-4xl text-2xl font-bold my-4 text-green-500">
                Learn
              </h3>
              <p>Blockchain related resources</p>
            </div>
          </div>
        </router-link>
        <!-- COL -->
        <router-link to="/jobs" class="hover:scale-95 duration-300">
          <div
            class="border p-4 border-gray-600 rounded-xl relative h-64"
            id="interest_4"
            v-motion-slide-left
            :delay="500"
          >
            <i class="fa-solid fa-gears hover:text-green-500 text-6xl"></i>
            <div class="absolute bottom-2">
              <h3 class="lg:text-4xl text-2xl font-bold my-4 text-green-500">
                Jobs
              </h3>
              <p>Find work with a company using blockchain</p>
            </div>
          </div>
        </router-link>
        <!-- COL -->
        <div class="grid place-items-center">
          <lottie-player
            src="https://assets1.lottiefiles.com/private_files/lf30_ukfmytdx.json"
            background="transparent"
            speed="1"
            loop
            autoplay
            style="width: 200px; height: 200px"
            class=""
          ></lottie-player>
        </div>
      </div>
    </section>
    <!-- NEWS -->
    <section class="dark:bg-gray-900 dark:text-white">
      <div class="container grid lg:grid-cols-5"></div>
    </section>
    <!-- WALLET -->
    <section class="dark:bg-gray-900 dark:text-white">
      <div class="container grid lg:grid-cols-5"></div>
    </section>
    <!-- IMAGE PARALLAX -->
    <section class="bg-fixed" id="get-started">
      <div
        class="grid place-items-center bg-gradient-to-r from-green-500 to-green-400 py-20"
      >
        <div class="grid place-items-center">
          <h2 class="lg:text-6xl font-bold my-4">Connect your wallet</h2>
          <p class="lg:w-1/3 text-center text-2xl">
            To apply to jobs and start stacking satoshis, login with your
            lightning wallet.
          </p>
          <img src="" alt="" />
        </div>
        <lottie-player
          src="https://assets6.lottiefiles.com/packages/lf20_g1wiidwh.json"
          background="transparent"
          speed="1"
          loop
          autoplay
          style="width: 300px; height: 300px"
          class=""
        ></lottie-player>
        <router-link to="/wallet">
          <button
            class="p-2 px-4 rounded-xl border bg-black text-white text-2xl font-bold uppercase hover:scale-95 duration-300"
          >
            Get Started
          </button>
        </router-link>
      </div>
    </section>
    <!-- SIGN UP -->
    <section>
      <div></div>
    </section>
  </main>
</template>

<style>
#get-started {
  background-image: url("../assets/bitcoin-wallpaper.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}
#interest_1 {
  background-image: url("../assets/interest_1.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}
#interest_2 {
  background-image: url("../assets/interest_2.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}
#interest_3 {
  background-image: url("../assets/interest_3.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}
#interest_4 {
  background-image: url("../assets/interest_4.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}
</style>
