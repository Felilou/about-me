<script setup lang="ts">
const links = [
  {
    label: "Home",
    icon: "i-heroicons-home",
    to: "/",
    click: () => {
      isOpen.value = false;
    }
  },
  {
    label: "About me",
    icon: "i-heroicons-user",
    to: "/about-me",
    click: () => {
      isOpen.value = false;
    }
  },
  {
    label: "Kontakt",
    icon: "i-heroicons-phone",
    to: "/contact",
    click: () => {
      isOpen.value = false;
    }
  },
];
const isOpen = ref(false);
</script>

<template>
  <div class="fixed w-screen flex flex-row z-10 p-5">
    <div class="hidden lg:flex bg-white dark:bg-gray-900 animate__animated animate__fadeInDownBig ms-auto shadow rounded-lg">
      <UHorizontalNavigation :links="links" class="px-2"/>
      <div class="border-s flex items-center border-gray-500 pe-2">
        <LanguageSelect class="mx-2"/>
      </div>
    </div>
    <UButton
      @click="isOpen = true"
      icon="i-heroicons-bars-3-solid"
      size="sm"
      color="primary"
      square
      class="block lg:hidden bg-primary animate__animated animate__fadeInDownBig ms-auto shadow pt-3 pb-2 px-4 border border-primary-700"
    />
  </div>
  
  <div>
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
          <LanguageSelect />
        </div>
      </UCard>
    </UModal>
  </div>
</template>
