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
const isDark = ref(false);

const provideLanguage = provide("language", language);
const provideIsDark = provide("isDark", isDark);

onMounted(() => {
  setUpColorTheme();
});

watch(isDark, (newIsDark) => {
  debugTheme();
})
  

function setUpColorTheme(){
  isDark.value = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
  if (localStorage.getItem("theme")) {
    isDark.value = localStorage.getItem("theme") === "dark";
  }
  debugTheme();
}



function debugTheme() {
  const theme = isDark.value ? "dark" : "ligth";
  useColorMode().preference = theme;
  localStorage.setItem("theme", theme);
}
</script>
