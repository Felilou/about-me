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
  Tag: 'Esmaspäev',
  Zeit: '15:00 - 18:00'
}, {
  Tag: 'dienstagE',
  Zeit: '15:00 - 18:01'
},{
  Tag: 'mittwochE',
  Zeit: '15:00 - 18:20'
},{
  Tag: 'donnerstagE',
  Zeit: '15:00 - 18:10'
},{
  Tag: 'Reede',
  Zeit: '15:00 - 18:00'
},{
  Tag: 'samstagE',
  Zeit: '15:00 - 18:00'
},{
  Tag: 'sonntagE',
  Zeit: 'GeschlossenE'
}]

//Пятница = Freitag
//Понедельник = montag
//Kontakt = контакт

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