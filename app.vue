<template>
  <div id="heroImg">
    <img src="/img/20240916-GZ1A8232-1.jpg" alt="Background" class="fixed-bg" />
    <Navbar />
    <NuxtPage />
    <Footer />
  </div>
</template>

<style>
@import '/node_modules/animate.css/animate.css';

p{
  padding-bottom: 0.5rem;
}
</style>

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

<script setup>
const language = ref("at");
const provideLanguage = provide("language", language);
</script>
