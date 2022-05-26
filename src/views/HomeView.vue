<script setup>
import HeroSection from "../components/HeroSection.vue";
</script>

<template>
  <main>
    <HeroSection />
    <!-- BLURB -->
    <section class="dark:bg-gray-900 dark:text-white flex justify-center">
      <div class="lg:w-1/2 relative" v-motion-slide-left>
        <h2 class="lg:text-8xl text-4xl font-bold my-20">
          Bitcoin is the future of money.
        </h2>
        <h2 class="lg:text-8xl text-4xl font-bold my-20">
          The tonic for financial health.
        </h2>
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
    </section>
    <!-- PURPOSE OF BITONIC -->
    <section
      class="dark:bg-gray-900 dark:text-white flex justify-center"
      v-motion-slide-right
    >
      <div class="container grid lg:grid-cols-4 gap-4 lg:w-2/4 my-20">
        <!-- COL -->
        <div>
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
    <!-- Partners -->
    <section class="dark:bg-gray-900 dark:text-white">
      <div class="container grid lg:grid-cols-5"></div>
    </section>
    <!-- IMAGE PARALLAX -->
    <section class="bg-fixed" id="get-started">
      <div
        class="grid place-items-center bg-gradient-to-r from-green-500 to-green-400 py-20"
      >
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
            class="p-2 px-4 rounded-xl border bg-green-500 hover:bg-black text-white text-2xl font-bold uppercase hover:scale-95 duration-300"
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
