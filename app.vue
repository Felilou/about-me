<template>
    <Navbar></Navbar>
    <NuxtPage />
    <Footer></Footer>
</template>

<script setup>
const settings = ref({language: 'at', mode: 'ligth'})
const provideSettings = provide('settings', settings)

onMounted(() => {
  
  console.log(settings.mode)
})
</script>