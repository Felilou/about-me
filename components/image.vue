<template>
  <img :src="src" alt="picture" style="width: 100%;" class="rounded">
</template>

<script lang="ts" setup>
const props = defineProps({
  src: {
    type: String,
    default: 'https://srv1467-files.hstgr.io/3effc9940015e6f9/files/images/20240916-GZ1A8109.jpg',
    required: false,
  }
})
</script>

<style>

</style>