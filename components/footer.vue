<template>

  <div class="flex flex-col bg-white w-screen p-2">
    <UDivider icon="i-heroicons-information-circle-solid" />
    <div class="flex m-0 flex-col lg:flex-row items-stretch">
      <div class="p-1 lg:w-[50%]">
        <OpenTimesTable />
      </div>
      <div class="p-1 lg:w-[50%]">
        <ContactCard />
      </div>
    </div>
    <UDivider icon="i-heroicons-arrow-top-right-on-square-16-solid" />
    <div>
      <ExternalLinks />
    </div>
    <div>
      Lesen sie mehr <a href="" class="text-primary underline">hier</a>
    </div>
  </div>
</template>

<script lang="ts" setup></script>

<style scoped>
.card-title {
  border-bottom: 2px solid var(--bs-primary) !important;
}
</style>
