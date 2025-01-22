<template>
    <div class="fixed-bg fixed w-screen h-screen -z-10 bg-[url('https://raw.githubusercontent.com/Felilou/about-me/refs/heads/build/img/20240916-GZ1A8344.jpg')] ">
    </div>
    <div class="flex pt-[15vh] flex-col items-center mb-[15vh] mx-auto md:w-[50vw]">
        <ContactCard class="w-full mb-5"/>
        <OpenTimesTable class="w-full"/>
    </div>
</template>

<script lang="ts" setup>
useSeoMeta({robots: 'noindex, follow',})
</script>

<style scoped>
.fixed-bg {
  background-position: center top;
  background-size: cover;
}
</style>
