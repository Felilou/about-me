<template>
  <a
    class="dropdown-toggle"
    role="button"
    data-bs-toggle="dropdown"
    aria-expanded="false"
    data-bs-display="static"
  >
  <i class="bi bi-translate"></i>
  </a>
  <ul class="dropdown-menu dropdown-menu-end">
    <li>
      <a class="dropdown-item" @click="language='ger'">Deutsch</a>
    </li>
    <li>
      <a class="dropdown-item" @click="language='est'">Estnisch</a>
    </li>
  </ul>
</template>

<script lang="ts" setup>
const language = inject('language')
console.log(language)
</script>

<style>

</style>