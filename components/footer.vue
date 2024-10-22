<template>
 
  <div class="flex flex-col bg-white w-screen">
    <UDivider icon="i-heroicons-information-circle-solid"/>
    <div class="flex m-0 p-2 flex-col lg:flex-row items-stretch">
      <div class="p-2 lg:w-[50%]">
        <OpenTimesTable />
      </div>
      <div class="p-2 lg:w-[50%]">
        <ContactCard /> 
      </div>
  </div>
  <UDivider label="@"/>
  
  </div>
</template>

<script lang="ts" setup></script>

<style scoped>
.card-title {
  border-bottom: 2px solid var(--bs-primary) !important;
}
</style>
