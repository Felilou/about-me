<template>
  <div id="heroImg">
    <Navbar />
    <NuxtPage />
    <Footer />
  </div>
</template>

<style>
@import '/node_modules/animate.css/animate.css';

#heroImg {
  background-image: url("/img/20240916-GZ1A8232-1.jpg");
  background-size: cover;
  background-position: center top;
  background-attachment: fixed;
}


</style>

<script setup>
const language = ref("at");
const provideLanguage = provide("language", language);
</script>
