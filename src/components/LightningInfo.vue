<template>
  <!-- WALLETS -->
  <section class="dark:bg-black dark:text-white flex justify-center">
    <div class="lg:w-2/3">
      <!-- WALLETS -->
      <div class="grid lg:grid-cols-2">
        <div class="lg:w-3/4">
          <h2 class="lg:text-8xl text-6xl font-bold">Lightning Wallets</h2>
          <h3 class="text-4xl my-4">
            The Lightning Network is the layer 2 solution for scaling Bitcoin
          </h3>
          <p class="my-8 text-2xl">
            It is great for micropayments and moving large sums with almost
            instantaneous transactions and minimal fees.
          </p>
        </div>

        <table class="text-center text-2xl">
          <tr class="font-bold uppercase text-sm text-green-600">
            <th>Wallet</th>
            <th>Custodial</th>
            <th>Non-Custodial</th>
          </tr>
          <tr>
            <td>
              <a href="https://www.walletofsatoshi.com/" rel=""
                >Wallet of Satoshi</a
              >
            </td>
            <td><i class="fa-solid fa-check"></i></td>
            <td><i class="fa-solid fa-xmark"></i></td>
          </tr>
          <tr class="dark:bg-gray-900">
            <td><a href="https://breez.technology/" rel="">Breez</a></td>
            <td><i class="fa-solid fa-xmark"></i></td>
            <td><i class="fa-solid fa-check"></i></td>
          </tr>
          <tr>
            <td><a href="https://phoenix.acinq.co/" rel="">Phoenix</a></td>
            <td><i class="fa-solid fa-xmark"></i></td>
            <td><i class="fa-solid fa-check"></i></td>
          </tr>
          <tr class="dark:bg-gray-900">
            <td><a href="https://bluewallet.io/" rel="">Blue Wallet</a></td>
            <td><i class="fa-solid fa-check"></i></td>
            <td><i class="fa-solid fa-check"></i></td>
          </tr>
          <tr>
            <td><a href="https://zeusln.app/" rel="">Zeus</a></td>
            <td><i class="fa-solid fa-xmark"></i></td>
            <td><i class="fa-solid fa-check"></i></td>
          </tr>
        </table>
      </div>
    </div>
  </section>

  <section></section>
</template>

<style>
a:hover {
  color: seagreen;
}
</style>
