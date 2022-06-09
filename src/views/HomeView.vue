<script setup>
import HeroSection from "../components/HeroSection.vue";

import ProofofWork from "../components/HomePage/ProofofWork.vue";
import LightningWallet from "../components/HomePage/LightningWallet.vue";
import WhoFor from "../components/HomePage/WhoFor.vue";
import AppCharacteristics from "../components/HomePage/AppCharacteristics.vue";
</script>

<template>
  <main>
    <HeroSection />
    <ProofofWork />
    <AppCharacteristics />

    <WhoFor />
    <LightningWallet />
  </main>
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=DM+Serif+Display&display=swap");
span {
  font-family: "DM Serif Display", serif;
}
#get-started {
  background-image: url("../assets/bitcoin-wallpaper.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}
</style>
