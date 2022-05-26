<template>
  <section
    class="dark:bg-black text-white dark:duration-300 bg-fixed"
    id="hero-section"
  >
    <div class="dark:bg-black/90 bg-black/50 w-full flex justify-center">
      <div class="container grid place-items-center" v-motion-fade>
        <div class="text-center mt-20">
          <h1 class="logo lg:text-9xl text-4xl font-bold">Bit & Tonic</h1>
          <p class="lg:text-2xl">Proof-of-Work</p>

          <lottie-player
            src="https://assets3.lottiefiles.com/private_files/lf30_ukfmytdx.json"
            background="transparent"
            speed="1"
            loop
            autoplay
            style="width: 500px; height: 500px"
            class="mix-blend-overlay"
          ></lottie-player>
        </div>
      </div>
    </div>
  </section>
</template>

<style>
#hero-section {
  background-image: url("../assets/mongolia-wilderness-6.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}
</style>
