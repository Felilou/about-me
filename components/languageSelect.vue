<script setup lang="ts">
var language: any = inject('language');
var mainLabel = ref("Deutsch")
var mainIcon = ref("i-flagpack-at")
const items = [
  [
    {
      label: "Estonian",
      icon: "i-flagpack-ee",
      shortcuts: ["EE"],
      click: () => {
        console.log("Changing language to ee");
        language.value = "ee";
        mainLabel.value = "Estonian"
        mainIcon.value = "i-flagpack-ee"
      },
    },
    {
      label: "Deutsch",
      icon: "i-flagpack-at",
      shortcuts: ["AT"],
      click: () => {
        language.value = "at";
        mainLabel.value = "Deutsch"
        mainIcon.value = "i-flagpack-at"
      },
    },
    {
      label: "Russian",
      icon: "i-flagpack-ru",
      shortcuts: ["RU"],
      click: () => {
        console.log("Changing language to ru");
        language.value = "ru";
        mainLabel.value = "Russian"
        mainIcon.value = "i-flagpack-ru"
      },
    },
    {
      label: "Englisch",
      icon: "i-flagpack-gb-ukm",
      shortcuts: ["EN"],
      click: () => {
        console.log("Changing language to en");
        language.value = "en";
        mainLabel.value = "Englisch"
        mainIcon.value = "i-flagpack-gb-ukm"
      },
    },
  ],
];

onMounted(() => {
  if(language.value == "ee"){
    mainLabel.value = "Estonian";
    mainIcon.value = "i-flagpack-ee";
  }
  else if(language.value == "ru"){
    mainLabel.value = "Russian";
    mainIcon.value = "i-flagpack-ru";
  }
  else if(language.value == "en"){
    mainLabel.value = "Englisch";
    mainIcon.value = "i-flagpack-gb-ukm";
  }
})
</script>

<template>
  <UDropdown :items="items" :popper="{ placement: 'bottom-start' }">
    <UButton
      color="white"
      :label="mainLabel"
      :trailing-icon="mainIcon"
    />
  </UDropdown>
</template>
