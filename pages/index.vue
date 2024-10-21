<template>
  <div class="fixed-bg fixed w-screen h-screen -z-10 lg:bg-[url('/img/20240916-GZ1A8208.jpg')] bg-[url('/img/20240916-GZ1A8300.jpg')]"></div>
  <div class="h-[90vh] flex flex-col justify-end items-center">
    <div class="relative top-5 bg-primary">
      <h1 class="sm:text-7xl m-0 text-5xl text-white p-2 text-fancy">Herzlich willkommen</h1>
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
  background-position: 20% 50%;
  background-size: cover;
}
</style>
