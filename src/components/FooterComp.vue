<template>
  <section class="dark:bg-black bg-gray-300 text-white" id="footer-section">
    <!-- FILTER -->
    <div class="bg-gradient-to-r from-black to-black/70 py-20">
      <div class="flex justify-center">
        <div class="lg:w-1/2">
          <lottie-player
            src="https://assets8.lottiefiles.com/packages/lf20_dO8Ir9.json"
            background="transparent"
            speed="1"
            loop
            autoplay
            style="width: 200px; height: 200px"
            class=""
          ></lottie-player>
        </div>
      </div>
      <!-- SUBSCRIBE -->
      <div class="flex justify-center">
        <div class="grid lg:w-1/2">
          <!-- COL -->
          <div>
            <h3 class="font-bold text-4xl">Get updates!</h3>
            <div class="flex space-x-4">
              <input
                type="text"
                placeholder="email"
                class="p-2 text-2xl px-4 my-8 rounded-xl"
              />
              <button>subscribe</button>
            </div>
          </div>
        </div>
      </div>
      <!-- BITONIC -->
      <div class="flex justify-center my-20">
        <div class="grid lg:grid-cols-2 lg:w-1/2">
          <!-- COL -->
          <div>
            <h3 class="text-sm uppercase text-green-500">Bitcoin</h3>
            <p class="text-2xl">
              Bitcoin is a monetary solution. The blockchain has given rise to a
              crypto ecosystem that shows no signs of stopping.
            </p>
          </div>
          <!-- COL -->
          <div>
            <!-- LOTTIE FILE -->
          </div>
        </div>
      </div>
      <!-- PAGES -->
      <div class="flex justify-center my-20">
        <div class="lg:w-1/2">
          <h3 class="text-sm uppercase text-green-500">Areas of interest</h3>
          <div class="lg:flex space-x-4 text-2xl font-bold">
            <router-link to="/news">News</router-link>
            <router-link to="/news">Data</router-link>
            <router-link to="/news">Learn</router-link>
            <router-link to="/news">Jobs</router-link>
          </div>
        </div>
      </div>
      <!-- COL -->
      <div class="flex justify-center my-20">
        <div class="lg:w-1/2 text-2xl">
          <h3 class="text-sm uppercase text-green-500">Connect</h3>
          <div class="lg:flex space-x-4 text-2xl font-bold">
            <a href="">Twitter</a>
            <a href="">Github</a>
            <a href="">Instagram</a>
          </div>
        </div>
      </div>

      <!-- COPYRIGHT -->
      <div class="flex justify-center">
        <div class="lg:w-1/2">
          <h3 class="text-sm uppercase text-green-500">© Bitonic</h3>
          <div class="lg:flex space-x-4 text-2xl font-bold">
            <a href="https://jkhan.live" class="hover:text-green-600"
              >designed by <span class="font-mono">jay khan</span></a
            >
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style>
#footer-section {
  background-image: url("../assets/chemistry-bg.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: left;
}
</style>
