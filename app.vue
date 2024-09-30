<template>
  <Navbar  style="max-width: 1000px;" class="mx-auto"/>
  <div class="mx-auto" style="max-width: 1000px">
    <NuxtPage class="p-3" />
  </div>
  <Footer />
</template>

<script setup>
const language = ref('ger')
const languageProvide = provide('language', language)
</script>