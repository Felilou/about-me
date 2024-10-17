<template>
  <div>
    <img :src="imgUrl" alt="Background" class="fixed-bg" />
    <div class="md:h-[80vh] h-[75vh]">
    <slot name="title"></slot>
  </div>
  <div class="animate__animated animate__fadeInUp">
    <div class="h-[20vh] md:h-[15vh] bg-gradient-to-b from-transparent to-white dark:to-gray-900"></div>
    <div class="bg-white text-black dark:bg-gray-900 dark:text-white">
      <slot name="content"></slot>
    </div>
  </div>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps({
  imgUrl: {
    type: String,
    required: true,
    default: '',
  }
})
</script>

<style scoped>
.fixed-bg {
  position: fixed;
  top: 0;
  left: 50%; /* Startpunkt in der Mitte des Bildschirms */
  transform: translateX(-50%); /* zentriert das Bild relativ zum Viewport */
  width: 100vw; /* Volle Breite des Viewports */
  height: auto; /* Proportionen des Bildes werden beibehalten */
  min-height: 100vh; /* Mindestens die Höhe des Viewports */
  z-index: -1; /* Hinter dem Inhalt */
  object-fit: cover; /* Das Bild passt sich der Größe an */
}
</style>