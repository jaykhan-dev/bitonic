<template>
  <section class="dark:bg-black dark:text-white flex justify-center py-20 p-2">
    <div class="lg:w-2/3 grid place-items-center">
      <div class="text-center grid lg:grid-cols-2 place-items-center">
        <!-- COL -->
        <div>
          <img
            src="../../assets/satoshi.png"
            alt=""
            height="600"
            width="300"
            id="satoshi-wallet"
            class="border dark:border-gray-700 rounded-3xl shadow-xl shadow-green-500/50 bg-black"
          />
        </div>
        <!-- COL -->
        <div class="lg:text-left text-center">
          <h2 class="lg:text-8xl text-6xl font-bold my-8 lg:w-2/3">
            Proof of <span class="text-green-500">Work</span>
          </h2>
          <p class="text-2xl lg:w-2/3">
            The protocol behind Bitcoin, Proof of Work is a great way to
            determine value. Put in the work, and receive the reward or payment.
          </p>
          <a href="" class=""
            ><button
              class="border p-2 px-4 rounded-xl hover:bg-green-500 my-4 text-sm uppercase hover:translate-x-4 duration-300 hover:text-black"
            >
              Learn More
            </button>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
// GSAP
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { onMounted } from "@vue/runtime-core";
gsap.registerPlugin(ScrollTrigger);

export default {
  setup() {
    onMounted(() => {
      //IMAGE
      gsap.set("#satoshi-wallet", { scale: 0, opacity: 0 });
      gsap.to("#satoshi-wallet", {
        scrollTrigger: {
          trigger: "#satoshi-wallet",
          scrub: 1,
          start: "top bottom",
          end: "top center",
        },
        scale: 1,
        opacity: 1,
        ease: "none",
        duration: 3,
      });
    });
  },
};
</script>
