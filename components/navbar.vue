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
  <div class="fixed w-screen flex flex-row z-10 p-5">
    <div class="hidden lg:flex bg-white dark:bg-gray-900 px-2 py-2 animate__animated animate__fadeInRightBig ms-auto shadow rounded-lg">
      <UHorizontalNavigation :links="links" />
      <div class="border-s flex items-center border-gray-500">
        <LanguageSelect class="mx-2"/>
        <ThemeSwitch />
      </div>
    </div>
    <UButton
      @click="isOpen = true"
      icon="i-heroicons-bars-3-bottom-left-16-solid"
      size="sm"
      color="primary"
      square
      class="block lg:hidden bg-primary py-3 px-4 animate__animated animate__fadeInRightBig ms-auto shadow"
    />
  </div>
  
  <div class="flex lg:none">
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
          <ThemeSwitch />
        </div>
      </UCard>
    </UModal>
  </div>
</template>
