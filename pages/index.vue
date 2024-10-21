<template>
  <div class="fixed-bg">

  </div>
  <div class="h-[90vh] flex flex-col justify-end items-center">
    <div class="relative top-5 bg-primary">
      <h1 class="sm:text-7xl m-0 text-5xl text-white p-2">Herzlich willkommen</h1>
    </div>
  </div>
  <div class="bg-white h-screen border-t border-primary">
    <UContainer class="px-2 py-7 mx-auto max-w-[700px]">
      <p>some text</p>
    </UContainer>
  </div>
</template>

<script setup>
</script>

<style scoped>
.fixed-bg {
  position: fixed;
  width: 100vw; /* Volle Breite des Viewports */
  height: 100vh; /* Mindestens die Höhe des Viewports */
  z-index: -1; /* Hinter dem Inhalt */
  background-image: url("/public/img/20240916-GZ1A8300.jpg");
  background-position: 20% 30%;
  background-size: cover;
  background-repeat: no-repeat; 
}
</style>
