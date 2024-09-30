<template>
  <div v-if="lang=='ger'">{{ ger }}</div>
  <div v-else>{{ est }}</div>
</template>

<script lang="ts" setup>
const props = defineProps({
    ger: {
        type: String,
        required: true,
    },
    est: {
        type: String,
        required: true
    }
})
const lang = inject('language')
</script>