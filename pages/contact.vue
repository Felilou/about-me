<template>
    <div class="fixed-bg fixed w-screen h-screen -z-10 bg-[url('https://raw.githubusercontent.com/Felilou/about-me/refs/heads/build/img/20240916-GZ1A8344.jpg')] ">
    </div>
    <div class="flex pt-[15vh] flex-col items-center mb-[15vh] mx-auto md:w-[50vw]">
        <ContactCard class="w-full mb-5"/>
        <OpenTimesTable class="w-full"/>
    </div>
</template>

<script lang="ts" setup>
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

<style scoped>
.fixed-bg {
  background-position: center top;
  background-size: cover;
}
</style>
