<template>
  <section class="dark:bg-gray-900 dark:text-white dark:duration-300">
    <div class="lg:h-screen flex justify-center">
      <div class="container mt-20">
        <div class="relative">
          <h1 class="lg:text-6xl text-4xl font-bold">Learn</h1>
          <p>Learn how Bitcoin can bring you financial freedom</p>
          <lottie-player
            src="https://assets3.lottiefiles.com/packages/lf20_yjwqaud8.json"
            background="transparent"
            speed="1"
            loop
            autoplay
            style="width: 100px; height: 100px"
            class="absolute bottom-0 right-0"
          ></lottie-player>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  mounted() {
    window.scrollTo(0, 0);
  },
};
</script>
