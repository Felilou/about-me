<script setup lang="ts">

</script>

<template>
  <div class="btn-group" role="group" aria-label="Basic radio toggle button group">
    <input type="radio" class="btn-check" name="btnradio" id="btnradio1" autocomplete="off" checked>
    <label class="btn btn-outline-secondary" for="btnradio1">
      <Icon name="cif:at"/>
    </label>

    <input type="radio" class="btn-check" name="btnradio" id="btnradio2" autocomplete="off">
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
  background-color: var(--bs-);
  color: white;
}
</style>