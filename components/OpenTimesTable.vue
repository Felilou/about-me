<script setup lang="ts">
const daysAT = [{
  Tag: 'Montag',
  Zeit: '10:00 - 15:00'
}, {
  Tag: 'Dienstag',
  Zeit: '10:00 - 15:00'
}, {
  Tag: 'Mittwoch',
  Zeit: '14:00 - 18:00'
}, {
  Tag: 'Donnerstag',
  Zeit: '10:00 - 15:00'
}, {
  Tag: 'Freitag',
  Zeit: 'Geschlossen'
}]

const daysEE = [{
  Päev: 'Esmaspäev',
  Aeg: '10:00 - 15:00'
}, {
  Päev: 'Teisipäev',
  Aeg: '10:00 - 15:00'
}, {
  Päev: 'Kolmapäev',
  Aeg: '14:00 - 18:00'
}, {
  Päev: 'Neljapäev',
  Aeg: '10:00 - 15:00'
}, {
  Päev: 'Reede',
  Aeg: 'Suletud'
}]

const daysRU = [{
  День: 'Понедельник',
  Время: '10:00 - 15:00'
}, {
  День: 'Вторник',
  Время: '10:00 - 15:00'
}, {
  День: 'Среда',
  Время: '14:00 - 18:00'
}, {
  День: 'Четверг',
  Время: '10:00 - 15:00'
}, {
  День: 'Пятница',
  Время: 'Закрыто'
}]

const daysEN = [{
  Day: 'Monday',
  Time: '10:00 - 15:00'
}, {
  Day: 'Tuesday',
  Time: '10:00 - 15:00'
}, {
  Day: 'Wednesday',
  Time: '14:00 - 18:00'
}, {
  Day: 'Thursday',
  Time: '10:00 - 15:00'
}, {
  Day: 'Friday',
  Time: 'Closed'
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
        Vastuvõtu ajad
      </LanguageBox>
      <LanguageBox language-prop="ru">
        Часы работы
      </LanguageBox>
      <LanguageBox language-prop="en">
        Opening hours
      </LanguageBox>
    </template>
    <LanguageBox language-prop="at">
      <UTable :rows="daysAT"/>
    </LanguageBox>
    <LanguageBox language-prop="ee">
      <UTable :rows="daysEE"/>
    </LanguageBox>
    <LanguageBox language-prop="ru">
      <UTable :rows="daysRU"/>
    </LanguageBox>
    <LanguageBox language-prop="en">
      <UTable :rows="daysEN"/>
    </LanguageBox>
  </UCard>
</template>