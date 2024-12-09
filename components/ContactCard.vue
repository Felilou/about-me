<template>
  <div>
    <UCard>
      <template #header>
        Kontakt
      </template>
      <div class="flex flex-col">
        <div class="flex items-center">
          <a href="mailto:ene.koenigswieser@mikroskop-zahnarzt.at" class="ms-2 bg-primary rounded px-2 py-1 text-white text-md hover:bg-primary-600 w-full flex items-center"><Icon name="heroicons:envelope-20-solid" class="me-2"/>ene.koenigswieser@mikroskop-zahnarzt.at</a> 
        </div>
        <UDivider label="-"/>
        <div class="flex items-center">
          <a href="tel:+43 699 15055800" class="ms-2 bg-primary rounded px-2 py-1 text-white text-md hover:bg-primary-600 w-full flex items-center"><Icon name="heroicons:phone-16-solid" class="me-2"/>+43 699 15055800 </a> 
        </div>
      </div>
      <template #footer>
        Bitte beachten Sie, das wir telefonisch nur von bis erreichbar sind.
      </template>
    </UCard>
  </div>
</template>

<script lang="ts" setup>

</script>

<style>

</style>