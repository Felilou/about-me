<script setup lang="ts">
const daysAT = [{
  Tag: 'Montag - Freitag',
  Zeit: '14:00 - 18:00'
}]

const daysEE =  [{
  Päev: 'Esmaspäev - Reede',
  Aeg: '14:00 - 18:00'
}]

const daysRU = [{
  день: 'Понедельник - Пятница',
  Время: '14:00 - 18:00'
}]

const daysEN = [{
  Day: 'Monday - Friday',
  Time: '14:00 - 18:00'
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