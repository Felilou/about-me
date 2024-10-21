<template>
  <div>
    <div class="fixed-bg" :style="'background-image: url('+ imgUrl +')'"></div>
    <div class="md:h-[60vh] h-[60vh]">
    <slot name="title"></slot>
  </div>
  <div class="animate__animated animate__fadeInUp">
    <div class="h-[20vh] md:h-[15vh] bg-gradient-to-b from-transparent to-white dark:to-gray-900"></div>
    <div class="bg-white text-black dark:bg-gray-900 dark:text-white">
      <slot name="content"></slot>
    </div>
  </div>
  </div>
</template>

<script lang="ts" setup>

const props = defineProps({
  imgUrl: {
    type: String,
    required: true,
    default: '',
  }
})

</script>
