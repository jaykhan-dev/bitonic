<template>
  <section class="dark:bg-black bg-gray-300 text-white" id="footer-section">
    <!-- FILTER -->
    <div class="bg-gradient-to-r from-black to-black/70 py-20">
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
            <h3 class="font-bold text-4xl">Bitonic</h3>
            <p class="text-2xl">
              Bitcoin is a monetary solution. It is the tonic for financial
              freedom.
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
            <a href="">@jaykhan_sound</a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style>
#footer-section {
  background-image: url("../assets/mother-board-bg.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}
</style>
