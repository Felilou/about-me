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
  Zeit: 'Geschlossen'
}]

const daysEE =  [{
  Tag: 'montagE',
  Zeit: '15:00 - 18:00'
}, {
  Tag: 'dienstagE',
  Zeit: '15:00 - 18:00'
},{
  Tag: 'mittwochE',
  Zeit: '15:00 - 18:00'
},{
  Tag: 'donnerstagE',
  Zeit: '15:00 - 18:00'
},{
  Tag: 'freitagE',
  Zeit: '15:00 - 18:00'
},{
  Tag: 'samstagE',
  Zeit: '15:00 - 18:00'
},{
  Tag: 'sonntagE',
  Zeit: 'GeschlossenE'
}]
</script>

<template>
  <UCard>
    <template #header>
      <LanguageBox language-prop="at">
        Öffnungszeiten
      </LanguageBox>
      <LanguageBox language-prop="ee">
        Lahtiolekuajad
      </LanguageBox>
    </template>
    <LanguageBox language-prop="at">
      <UTable :rows="daysAT"/>
    </LanguageBox>
    <LanguageBox language-prop="ee">
      <UTable :rows="daysEE"/>
    </LanguageBox>
  </UCard>
</template>