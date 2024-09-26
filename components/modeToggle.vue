<template>
  <a
    class="dropdown-toggle"
    role="button"
    data-bs-toggle="dropdown"
    aria-expanded="false"
  >
  <i v-if="lightMode" class="bi bi-sun-fill"></i>
  <i v-else class="bi bi-moon-stars-fill"></i>
  </a>
  <ul class="dropdown-menu dropdown-menu-end">
    <li>
      <a class="dropdown-item" @click="setMode(false)"><i class="bi bi-moon-stars-fill me-2"></i>Dark</a>
    </li>
    <li>
      <a class="dropdown-item" @click="setMode(true)"><i class="bi bi-sun-fill me-2"></i>Ligth</a>
    </li>
  </ul>
</template>

<script lang="ts" setup>
var lightMode = ref(true);

onMounted(() => {
  const isDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;
  setMode(!isDarkMode);
});

function setMode(isLigthMode: boolean) {
  lightMode.value = isLigthMode;
  document.body.setAttribute("data-bs-theme", isLigthMode ? "ligth" : "dark");
}

</script>

<style></style>
