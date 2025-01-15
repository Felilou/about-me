<template>
  <Navbar />
  <NuxtPage />
</template>

<style>
@import '/node_modules/animate.css/animate.css';
@font-face {
  font-family: Modernist;
  src: url('/public/fonts/Sk-Modernist-Regular.otf');
}

.text-fancy {
  font-family: Modernist, serif;
  font-weight: 400;
  font-style: normal;
}

h1 {
  display: block;
  font-size: 2em;
  margin-top: 0.67em;
  margin-bottom: 0.67em;
  margin-left: 0;
  margin-right: 0;
  font-weight: bold;
}

h2 {
  display: block;
  font-size: 1.5em;
  margin-top: 0.83em;
  margin-bottom: 0.83em;
  margin-left: 0;
  margin-right: 0;
  font-weight: bold;
}

h3 {
  display: block;
  font-size: 1.17em;
  margin-top: 1em;
  margin-bottom: 1em;
  margin-left: 0;
  margin-right: 0;
  font-weight: bold;
}

h4 {
  display: block;
  margin-top: 1.33em;
  margin-bottom: 1.33em;
  margin-left: 0;
  margin-right: 0;
  font-weight: bold;
}

h5 {
  display: block;
  font-size: .83em;
  margin-top: 1.67em;
  margin-bottom: 1.67em;
  margin-left: 0;
  margin-right: 0;
  font-weight: bold;
}

h6 {
  display: block;
  font-size: .67em;
  margin-top: 2.33em;
  margin-bottom: 2.33em;
  margin-left: 0;
  margin-right: 0;
  font-weight: bold;
}

p {
  margin-bottom: 2em;
}

</style>

<script setup lang="ts">
const language = ref("at");
const provideLanguage = provide("language", language);

onMounted(() => {
  useColorMode().preference = 'light';
  console.log(useColorMode())
})

useSeoMeta({
  title: 'Ene Königswieser | Mikroskop - Zahnarztpraxis',
  ogTitle: 'Ene Königswieser | Mikroskop - Zahnarztpraxis',
  description: 'Dr.Ene Königswieser. Präzise Zahnbehandlung mit langanhaltenden Ergebnissen, in freundlicher Athmosphäre.',
  ogDescription: 'Dr.Ene Königswieser. Präzise Zahnbehandlung mit langanhaltenden Ergebnissen, in freundlicher Athmosphäre.',
  ogImage: 'https://raw.githubusercontent.com/Felilou/about-me/refs/heads/build/img/20240916-GZ1A8139.jpg',
  colorScheme: 'only light',
  themeColor: 'blue',
  applicationName: 'Ene Königswieser about me',
  author: 'Ene Königswieser',
  viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
  robots: 'index, follow',
  keywords: 'Ene Königswieser, Zahnarzt, Zahnarztpraxis, Mikroskop, Zahnarzt Praxis, Zahnarzt Praxis Wien, Zahnarzt Praxis in Wien, Zahnarzt Praxis in 1010 Wien, Zahnarzt Praxis in 1010, Zahnarzt Praxis in Wien, Zahnarzt Praxis in 1010 Wien, Zahnarzt Praxis in 1010 Wien, Zahnarzt Praxis in 1010 Wien, Zahnarzt Praxis in 1010 Wien, Zahnarzt Praxis in 1010 Wien, Zahnarzt Praxis in 1010 Wien, Zahnarzt Praxis in 1010 Wien, Zahnarzt Praxis in 1010 Wien, Zahnarzt Praxis in 1010 Wien',
  ogType: 'website',
})
</script>
