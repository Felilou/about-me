<script setup lang="ts">
const links = [
{
  icon: 'i-heroicons-home',
  label: '',
  to:'https://mundhygiene-zahnarzt.at/'
},
{
  icon: 'i-mdi-facebook-box',
  label: '',
  to:'https://www.facebook.com/'
}, {
  icon: 'i-mdi-instagram',
  label: '',
  to: 'https://www.instagram.com/'
}]
</script>

<template>
  <UHorizontalNavigation :links="links" class="border-b border-gray-200 dark:border-gray-800 justify-center" />
</template>

