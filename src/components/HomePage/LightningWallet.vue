<template>
  <section class="bg-fixed" id="get-started">
    <div class="grid place-items-center bg-black text-white py-20">
      <div class="grid place-items-center">
        <h2 class="lg:text-8xl text-6xl text-center font-bold my-4">
          <span class="text-green-500">Connect</span> your wallet
        </h2>
        <p class="lg:w-2/3 text-center text-2xl my-4">
          To manage your jobs and start stacking satoshis, login with your
          lightning wallet.
        </p>
        <img src="" alt="" />
      </div>
      <lottie-player
        src="https://assets6.lottiefiles.com/packages/lf20_g1wiidwh.json"
        background="transparent"
        speed="1"
        loop
        autoplay
        style="width: 300px; height: 300px"
        class=""
      ></lottie-player>
      <router-link to="/wallet">
        <button
          class="p-2 px-4 rounded-xl border bg-black text-white text-2xl font-bold uppercase hover:bg-green-500 hover:scale-95 duration-300"
        >
          Get Started
        </button>
      </router-link>
    </div>
  </section>
</template>
