<template>
  <section class="dark:bg-black dark:text-white flex justify-center p-2">
    <div class="container grid place-items-center w-full">
      <!-- Header -->
      <div
        class="lg:flex justify-between items-center p-4 bg-gradient-to-r from-blue-600 to-purple-500 rounded-xl shadow-xl my-8 text-white w-full mt-20"
      >
        <!-- NAME -->
        <div>
          <h2 class="lg:text-6xl font-bold my-2">
            <i class="fa-solid fa-face-smile mr-4"></i>Jay Khan
          </h2>
          <p>Freelancer</p>
        </div>
        <!-- SATS -->
        <div class="text-right">
          <h2 class="lg:text-6xl font-bold my-2">0.26509063</h2>
          <p>USD: $10,000</p>
        </div>
      </div>
      <!-- STATUS -->
      <div class="grid lg:grid-cols-3 gap-4 my-8">
        <!-- COL -->
        <div
          class="p-4 rounded-xl border dark:border-gray-700 dark:bg-gray-900 shadow-xl"
        >
          <p class="text-sm uppercase font-bold">Project completed</p>
          <h2 class="lg:text-6xl text-4xl font-bold my-4">5</h2>
        </div>
        <!-- COL -->
        <div
          class="p-4 rounded-xl border dark:border-gray-700 dark:bg-gray-900 shadow-xl"
        >
          <p class="text-sm uppercase font-bold">In progress</p>
          <h2 class="lg:text-6xl text-4xl font-bold my-4">2</h2>
        </div>
        <!-- COL -->
        <div
          class="p-4 rounded-xl border dark:border-gray-700 dark:bg-gray-900 shadow-xl"
        >
          <p class="text-sm uppercase font-bold">Success rate</p>
          <h2 class="lg:text-6xl text-4xl font-bold my-4">100%</h2>
        </div>
      </div>
      <!-- Applications -->
      <div class="w-full my-20">
        <h2 class="lg:text-6xl text-4xl font-bold my-4">Proof of work</h2>
        <div
          class="w-full grid lg:grid-cols-8 border p-2 rounded-xl dark:border-gray-700"
        >
          <!-- COL -->
          <div>
            <h3>Job title</h3>
          </div>

          <!-- COL -->
          <div>
            <h3>Company</h3>
          </div>

          <!-- COL -->
          <div>
            <h3>Industry</h3>
          </div>

          <!-- COL -->
          <div>
            <h3>Contact</h3>
          </div>

          <!-- COL -->
          <div>
            <h3>Earned</h3>
          </div>

          <!-- COL -->
          <div>
            <h3>Status</h3>
          </div>

          <!-- COL -->
          <div>
            <h3>Job type</h3>
          </div>

          <!-- COL -->
          <div>
            <h3>Date</h3>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style></style>
