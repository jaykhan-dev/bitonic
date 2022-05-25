<template>
  <section class="dark:bg-black bg-gray-300 text-white p-2">
    <!-- SUBSCRIBE -->
    <div class="flex justify-center my-20">
      <div class="grid lg:grid-cols-2 container">
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
        <!-- COL -->
        <div class="lg:flex items-center space-x-4">
          <a href="">Twitter</a>
          <a href="">Github</a>
          <a href="">Instagram</a>
        </div>
      </div>
    </div>
    <!-- BITONIC -->
    <div class="flex justify-center my-20">
      <div class="grid lg:grid-cols-2 container">
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
      <div class="container">
        <h3 class="text-sm uppercase text-green-500">Areas of interest</h3>
        <div class="lg:flex space-x-4 text-2xl font-bold">
          <router-link to="/news">News</router-link>
          <router-link to="/news">Data</router-link>
          <router-link to="/news">Learn</router-link>
          <router-link to="/news">Jobs</router-link>
        </div>
      </div>
    </div>
    <!-- COPYRIGHT -->
    <div class="flex justify-center">
      <div class="container">
        <h3 class="text-sm uppercase text-green-500">© Bitonic</h3>
        <div class="lg:flex space-x-4 text-2xl font-bold">
          <a href="">@jaykhan_sound</a>
        </div>
      </div>
    </div>
  </section>
</template>
