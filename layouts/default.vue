<template>
  <NuxtLayout>
    <slot />
  </NuxtLayout>
</template>

<script setup>
useHead({
  title: 'Nuxt 3 + Tailwind CSS + UI',
  meta: [
    { name: 'description', content: 'Nuxt 3 + Tailwind CSS + UI' },
    { name: 'keywords', content: 'Nuxt 3, Tailwind CSS, UI' },
    { name: 'author', content: 'Your Name' },
  ]
});
</script>
