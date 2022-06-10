<template>
  <section
    class="dark:bg-black text-white dark:duration-300 bg-fixed"
    id="hero-section"
  >
    <div
      class="h-screen grid place-items-center bg-gradient-to-b from-black/70 to-black"
    >
      <div
        class="grid lg:grid-cols-2 lg:w-2/3 place-items-center p-2"
        v-motion-slide-right
        :delay="500"
      >
        <!-- COL -->
        <div class="">
          <h1 class="lg:text-7xl text-6xl font-bold mt-8 my-4">
            Financial Freedom
          </h1>
          <p class="text-4xl my-8">
            Find jobs that payout in Bitcoin and start stacking
            <span class="text-green-500">satoshis</span>
          </p>
          <div class="flex space-x-4">
            <router-link to="/wallet">
              <button
                class="border-2 hover:px-8 duration-300 hover:bg-green-500 p-2 px-4 rounded-2xl text-2xl font-bold"
              >
                Sign in
              </button>
            </router-link>
          </div>
        </div>
        <!-- COL -->
        <div>
          <lottie-player
            src="https://assets2.lottiefiles.com/private_files/lf30_3ijiy6.json"
            background="transparent"
            speed="0.5"
            loop
            autoplay
            class=""
          ></lottie-player>
        </div>
      </div>
    </div>
  </section>
</template>

<style>
button {
}
#hero-section {
  background-image: url("../assets/chemistry-bg-2-100.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}
</style>
