<template>
  <UToggle
    on-icon="i-heroicons-moon-solid"
    off-icon="i-heroicons-sun-solid"
    size="xl"
    v-model="isDark"
  />
</template>

<script lang="ts" setup>
const isDark: any = inject('isDark');
</script>

