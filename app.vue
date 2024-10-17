<template>
    <Navbar />
    <NuxtPage />
    <Footer />
</template>

<style>
@import '/node_modules/animate.css/animate.css';

p{
  padding-bottom: 0.5rem;
}
</style>

<style scoped>

</style>

<script setup>
const language = ref("at");
const provideLanguage = provide("language", language);
</script>
