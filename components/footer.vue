<template>

  <div class="flex flex-col bg-white w-[100%] py-2">
    <UDivider icon="i-heroicons-information-circle-solid" />
    <div class="flex m-0 flex-col lg:flex-row justify-between">
      <div class="p-1 lg:w-[50%]">
        <OpenTimesTable />
      </div>
      <div class="p-1 lg:w-[50%]">
        <ContactCard />
        <WayCard />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup></script>

<style scoped>
.card-title {
  border-bottom: 2px solid var(--bs-primary) !important;
}
</style>
