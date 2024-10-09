<template>
    <Navbar />
    <NuxtPage />
    <Footer />
</template>

<style scoped>
</style>


<script setup>
const language = ref('at')
const provideLanguage = provide('language', language)
</script>