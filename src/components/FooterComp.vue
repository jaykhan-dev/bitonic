<template>
  <section
    class="dark:bg-black bg-gray-300 text-white bg-fixed"
    id="footer-section"
  >
    <!-- FILTER -->
    <div class="bg-gradient-to-b from-black to-black/70 py-20 p-2">
      <div class="flex justify-center">
        <div class="lg:w-1/2 grid place-items-center">
          <lottie-player
            src="https://assets2.lottiefiles.com/packages/lf20_zy0hqolm.json"
            background="transparent"
            speed="1"
            loop
            autoplay
            style="width: 200px; height: 200px"
            class=""
          ></lottie-player>
        </div>
      </div>
      <!-- SUBSCRIBE 
      <div class="flex justify-center">
        <div class="grid place-items-center text-center lg:w-1/2">
          <h3 class="font-bold text-4xl">Get updates!</h3>
          <p class="lg:w-1/2 text-2xl my-4">
            Get the latest updates when we post new material, jobs, and
            resources
          </p>
          <div class="lg:flex space-x-4">
            <input
              type="text"
              placeholder="email"
              class="p-2 text-2xl px-4 my-8 rounded-xl"
            />
            <button>subscribe</button>
          </div>
        </div>
      </div>
      -->
      <!-- BITONIC -->
      <div class="flex justify-center my-20">
        <div class="grid lg:grid-cols-2 lg:w-1/2">
          <!-- COL -->
          <div>
            <!-- LOTTIE FILE -->
          </div>
        </div>
      </div>
      <!-- PAGES -->
      <div class="flex lg:justify-center my-20">
        <div class="lg:w-1/2 grid lg:grid-cols-3 gap-4 text-center">
          <!-- COL -->
          <div class="">
            <h3 class="text-sm uppercase text-green-500">© Sound Bit. 2022.</h3>
            <div class="flex flex-col text-xl font-bold">
              <p class="">Own your keys.</p>
              <p>Own your Bitcoin.</p>
              <p>Own your future.</p>
            </div>
          </div>
          <!-- COL -->
          <div class="">
            <h3 class="text-sm uppercase text-green-500">General</h3>
            <div class="flex flex-col text-xl font-bold">
              <router-link to="/jobs">
                <a href="">Jobs</a>
              </router-link>
              <router-link to="/data">
                <a href="">Data</a>
              </router-link>
              <router-link to="/faq">
                <a href="">FAQ</a>
              </router-link>
            </div>
          </div>
          <!-- COL -->
          <div class="">
            <h3 class="text-sm uppercase text-green-500">Connect</h3>
            <div class="flex flex-col text-xl font-bold">
              <a href="">Twitter</a>
              <a href="">Github</a>
              <a href="">Instagram</a>
            </div>
          </div>
        </div>
      </div>
      <!-- LOGOS -->
      <div class="flex justify-center items-center py-4 space-x-8">
        <a
          href="https://jkhan.live"
          class="hover:text-green-600 text-sm uppercase"
          ><img
            src="../assets/jk-logo-white.svg"
            alt="Jay Khan logo"
            width="50"
            class="hover:scale-110 duration-300"
        /></a>
        <a href=""
          ><img
            src="../assets/sound-logo-white.svg"
            alt="Sound Co Logo"
            width="100"
            class="hover:scale-110 duration-300"
        /></a>
      </div>
    </div>
  </section>
</template>

<style>
#footer-section {
  background-image: url("../assets/footer-abstract.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: right;
}
</style>
