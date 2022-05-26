<script setup>
import HeroSection from "../components/HeroSection.vue";
</script>

<template>
  <main>
    <HeroSection />

    <!-- PURPOSE OF BITONIC -->
    <section
      class="dark:bg-black dark:text-white flex justify-center p-2"
      v-motion-slide-right
    >
      <div class="container grid lg:grid-cols-2 gap-4 lg:w-2/4 my-20">
        <!-- SECTION HEADING -->
        <div class="lg:w-1/2 grid place-items-center" v-motion-slide-left>
          <h2 class="text-6xl font-bold my-4">Areas of interest</h2>
          <p>
            Explore the resources, jobs, and learning material that has been
            curated and vetted.
          </p>
          <lottie-player
            src="https://assets2.lottiefiles.com/packages/lf20_ekuehted.json"
            background="transparent"
            speed="1"
            loop
            autoplay
            style="width: 200px; height: 200px"
            class=""
          ></lottie-player>
        </div>
        <!-- COL -->
        <div class="border p-4 border-gray-600 rounded-xl">
          <i class="fa-solid fa-newspaper hover:text-green-500 text-6xl"></i>
          <h3 class="lg:text-4xl text-2xl font-bold my-4 text-green-500">
            News
          </h3>
          <p>Get the latest news from a variety of sources</p>
        </div>
        <!-- COL -->
        <div>
          <i class="fa-solid fa-chart-line hover:text-green-500 text-6xl"></i>
          <h3 class="lg:text-4xl text-2xl font-bold my-4 text-green-500">
            Data
          </h3>
          <p>Follow the latest prices and data</p>
        </div>
        <!-- COL -->
        <div>
          <i
            class="fa-solid fa-building-columns hover:text-green-500 text-6xl"
          ></i>
          <h3 class="lg:text-4xl text-2xl font-bold my-4 text-green-500">
            Learn
          </h3>
          <p>Blockchain related resources</p>
        </div>
        <!-- COL -->
        <div>
          <i class="fa-solid fa-gears hover:text-green-500 text-6xl"></i>
          <h3 class="lg:text-4xl text-2xl font-bold my-4 text-green-500">
            Jobs
          </h3>
          <p>Find work with a company using blockchain</p>
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
            lightning wallet. This is web3.
          </p>
          <img src="" alt="" />
        </div>
        <lottie-player
          src="https://assets10.lottiefiles.com/packages/lf20_5badh7fj.json"
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
</style>
