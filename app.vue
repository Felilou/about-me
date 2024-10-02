<template>
  <Navbar/>
  <NuxtPage />
  <Footer />
</template>

<script setup>
const settings = ref({language: 'at', mode: 'dark'})
provide('settings', settings)
</script>