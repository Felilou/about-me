<template>
  <div class="">
    <img :src="src" alt="picture" style="width: 100%;" class="rounded">
  </div>
</template>

<script lang="ts" setup>
const props = defineProps({
  src: {
    type: String,
    default: 'https://picsum.photos/1920/1080'
  }
})
</script>

<style>

</style>