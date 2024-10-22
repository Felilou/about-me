<template>
  <div>
    <UCard>
      <template #header>
        Kontakt
      </template>
      <div class="flex flex-col">
        <div class="flex items-center">
          Mail
          <a href="mailto:ene.koenigswieser@mikroskop-zahnarzt.at" class="ms-2 bg-primary rounded px-2 py-1 text-white text-md hover:bg-primary-600 w-full">ene.koenigswieser@mikroskop-zahnarzt.at</a> 
        </div>
        <UDivider label="-"/>
        <div class="flex items-center">
          Tele
          <a href="tel:+43 699 15055800" class="ms-2 bg-primary rounded px-2 py-1 text-white text-md hover:bg-primary-600 w-full">+43 699 15055800</a> 
        </div>
      </div>
    </UCard>
  </div>
</template>

<script lang="ts" setup>

</script>

<style>

</style>