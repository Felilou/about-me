<script setup lang="ts">
const language = inject('language');
</script>

<template>
  <div class="btn-group" @change="console.log('Aktives modelVal:', modelVal)" role="group" aria-label="Basic radio toggle button group">
    <input type="radio" class="btn-check" name="btnradio" id="btnradio1" autocomplete="off" value="at" v-model="language">
    <label class="btn btn-outline-secondary" for="btnradio1">
      <Icon name="cif:at"/>
    </label>

    <input type="radio" class="btn-check" name="btnradio" id="btnradio2" autocomplete="off" value="ee" v-model="language">
    <label class="btn btn-outline-secondary" for="btnradio2">
      <Icon name="cif:ee"/>
    </label>
  </div>
</template>

<style scoped>
input[type="radio"]:checked + label {
  background-color: var(--bs-primary) !important;
  color: white !important;
  border-color: var(--bs-primary) !important;
}

input[type="radio"] + label:hover {
  background-color: var(--bs-secondary);
  color: white;
}
</style>
