<template>
  <section
    class="dark:bg-black text-white dark:duration-300 bg-fixed"
    id="hero-section"
  >
    <div
      class="dark:bg-black/70 bg-black/50 w-full h-screen grid place-items-center"
    >
      <div class="grid place-items-center" v-motion-fade :delay="500">
        <h1 class="logo lg:text-6xl text-6xl font-bold mt-8">Bit & Tonic</h1>
        <p class="text-2xl lg:w-1/2 my-8">
          Bitcoin is the future of money. The tonic for financial health.
        </p>
        <lottie-player
          src="https://assets7.lottiefiles.com/packages/lf20_cupurupx.json"
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
</template>

<style>
#hero-section {
  background-image: url("../assets/hero-bg.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}
</style>
