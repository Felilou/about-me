<template>
  <img :src="src" alt="picture" style="width: 100%;" class="rounded">
</template>

<script lang="ts" setup>
const props = defineProps({
  src: {
    type: String,
    default: 'https://koenigswieser.info/images/20240916-GZ1A8300.jpg',
    required: false,
  }
})
</script>

<style>

</style>