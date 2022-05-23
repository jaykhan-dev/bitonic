<template>
  <section
    class="dark:bg-gray-900 dark:text-white dark:duration-300 lg:h-screen"
  >
    <div class="flex justify-center" v-motion-slide-left>
      <div class="container mt-20 lg:flex">
        <input
          type="text"
          name=""
          id=""
          placeholder="search..."
          class="border rounded-2xl border-gray-500 border-opacity-20 w-full p-4 shadow-xl font-bold dark:bg-black z-40"
        />
        <button>
          <lottie-player
            src="https://assets7.lottiefiles.com/packages/lf20_nhv85sha.json"
            background="transparent"
            speed="1"
            loop
            autoplay
            style="width: 50px; height: 50px"
            class="hover:scale-110 duration-300"
          ></lottie-player>
        </button>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  setup() {},
};
</script>
