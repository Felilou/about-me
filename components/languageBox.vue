<script setup>
const language = inject("language");
const props = defineProps({
  languageProp: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <div v-if="language===languageProp">
    <slot></slot>
  </div>
</template>
