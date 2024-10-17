<script setup lang="ts">
const links = [
  {
    label: "Installation",
    icon: "i-heroicons-home",
    to: "/",
  },
  {
    label: "Horizontal Navigation",
    icon: "i-heroicons-chart-bar",
    to: "/about-me",
  },
  {
    label: "Command Palette",
    icon: "i-heroicons-command-line",
    to: "/contact",
  },
];
const isOpen = ref(false);
</script>

<template>
  <div class="fixed p-3 w-screen flex flex-row z-10">
    <div
      class="ms-auto rounded-lg px-2 animate__animated w-max hidden md:flex animate__fadeInDownBig shadow-lg bg-white dark:bg-gray-900 flex-row items-center"
    >
      <UHorizontalNavigation :links="links" />
      <div class="border-s flex items-center">
        <UColorModeToggle class="mx-2" />
        <LanguageSelect />
      </div>
    </div>

    <UButton
      @click="isOpen = true"
      icon="i-heroicons-bars-3-bottom-left-16-solid"
      size="sm"
      color="primary"
      square
      class="block md:hidden bg-primary py-3 px-4 animate__animated animate__fadeInRightBig ms-auto shadow-lg"
    />
  </div>
  <div class="d-flex d-sm-none">
    <UModal v-model="isOpen" fullscreen>
      <UCard
        :ui="{
          base: 'h-full flex flex-col',
          rounded: '',
          divide: 'divide-y divide-gray-100 dark:divide-gray-800',
          body: {
            base: 'grow',
          },
        }"
      >
        <template #header>
          <div class="flex items-center justify-between">
            <h3
              class="text-base font-semibold leading-6 text-gray-900 dark:text-white"
            >
              Modal
            </h3>
            <UButton
              color="gray"
              variant="ghost"
              icon="i-heroicons-x-mark-20-solid"
              class="-my-1"
              @click="isOpen = false"
            />
          </div>
        </template>
        <div class="h-full">
          <UVerticalNavigation :links="links" />
          <UColorModeToggle />
        </div>
      </UCard>
    </UModal>
  </div>
</template>
