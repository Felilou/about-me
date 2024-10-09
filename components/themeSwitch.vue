<template>
  <UToggle
    on-icon="i-heroicons-sun-solid"
    off-icon="i-heroicons-moon-solid"
    size="xl"
    v-model="isDark"
    @change="debugTheme()"
  />
</template>

<script lang="ts" setup>
const isDark = ref(true);

onMounted(() => {
  isDark.value =
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches;
  const theme = isDark ? "dark" : "light";
  if (localStorage.getItem("theme")) {
    isDark.value = localStorage.getItem("theme") === "dark";
  }
  debugTheme();
});

function debugTheme() {
  document.body.dataset.bsTheme = isDark.value ? "dark" : "ligth";
  localStorage.setItem("theme", isDark.value ? "dark" : "ligth");
}
</script>

