<script setup>
import HeroSection from "../components/HeroSection.vue";
import AreasofInterest from "../components/HomePage/AreasofInterest.vue";
import ProofofWork from "../components/HomePage/ProofofWork.vue";
import LightningWallet from "../components/HomePage/LightningWallet.vue";
</script>

<template>
  <main>
    <HeroSection />
    <ProofofWork />
    <AreasofInterest />
    <LightningWallet />
  </main>
</template>

<style>
#get-started {
  background-image: url("../assets/bitcoin-wallpaper.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}
</style>
