<template>
  <section
    class="dark:bg-green-500 dark:text-white flex justify-center py-20 p-2"
  >
    <div class="container grid place-items-center">
      <div class="grid lg:grid-cols-3 lg:w-3/4 gap-4 py-20 text-black text-2xl">
        <!-- COL -->
        <div>
          <lottie-player
            src="https://assets1.lottiefiles.com/private_files/lf30_0vn96xcf.json"
            background="transparent"
            speed="1"
            loop
            autoplay
            style="width: 100px; height: 100px"
          ></lottie-player>
          <h3 class="lg:text-4xl font-bold my-4">Self custody</h3>
          <p>
            Own your keys, own your Bitcoin, own your future. Use a
            non-custodial wallet to secure your finances.
          </p>
        </div>

        <!-- COL -->
        <div>
          <lottie-player
            src="https://assets6.lottiefiles.com/private_files/lf30_h03e9pog.json"
            background="transparent"
            speed="1"
            loop
            autoplay
            style="width: 100px; height: 100px"
          ></lottie-player>
          <h3 class="lg:text-4xl font-bold my-4">Low fees</h3>
          <p>
            No monthly or interest fees for having an account. Only the minimal
            Lightning network fees which are less than a penny
          </p>
        </div>

        <!-- COL -->
        <div>
          <lottie-player
            src="https://assets1.lottiefiles.com/packages/lf20_6k4jsmai.json"
            background="transparent"
            speed="1"
            loop
            autoplay
            style="width: 100px; height: 100px"
          ></lottie-player>
          <h3 class="lg:text-4xl font-bold my-4">Fast transactions</h3>
          <p>
            With the lightning network, the funds are yours within seconds! Send
            funds to anyone in the world with a Bitcoin wallet.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
