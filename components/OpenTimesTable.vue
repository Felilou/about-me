<script setup lang="ts">
const daysAT = [{
  Tag: 'montag',
  Zeit: '15:00 - 18:00'
}, {
  Tag: 'dienstag',
  Zeit: '15:00 - 18:00'
},{
  Tag: 'mittwoch',
  Zeit: '15:00 - 18:00'
},{
  Tag: 'donnerstag',
  Zeit: '15:00 - 18:00'
},{
  Tag: 'freitag',
  Zeit: '15:00 - 18:00'
},{
  Tag: 'samstag',
  Zeit: '15:00 - 18:00'
},{
  Tag: 'sonntag',
  Zeit: '15:00 - 18:00'
}]
</script>

<template>
  <UCard>
    <template #header>
      Öffnungszeiten
    </template>
    <UTable :rows="daysAT"/>
  </UCard>
</template>