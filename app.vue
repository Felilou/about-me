<template>
    <Navbar />
    <div class="mx-auto" style="max-width: 1000px;">
      <NuxtPage />
    </div>
    <Footer />
</template>

<style scoped>
</style>


<script setup>
const settings = ref({language: 'at', mode: 'ligth'})
const provideSettings = provide('settings', settings)

onMounted(() => {
  
  console.log(settings.mode)
})
</script>