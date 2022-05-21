<template>
  <section class="dark:bg-gray-900 dark:text-white dark:duration-300">
    <div
      class="grid place-items-center h-screen absolute w-full dark:opacity-10 opacity-20"
    >
      <lottie-player
        src="https://assets7.lottiefiles.com/packages/lf20_nhv85sha.json"
        background="transparent"
        speed="1"
        loop
        autoplay
        style="width: 500px; height: 500px"
        class=""
      ></lottie-player>
    </div>
    <div class="lg:h-screen flex justify-center">
      <div class="container mt-20 relative">
        <input
          type="text"
          name=""
          id=""
          placeholder="search..."
          class="border rounded-2xl border-gray-500 border-opacity-20 w-full p-4 shadow-xl font-bold dark:bg-black"
        />
      </div>
    </div>
  </section>
</template>
