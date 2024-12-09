<template>
  <div
    class="fixed-bg fixed w-screen h-screen -z-10 lg:bg-[url('/img/20240916-GZ1A8300-1.jpg')] bg-[url('/img/20240916-GZ1A8300-1.jpg')] ">
  </div>
  <div class="h-[80vh] flex flex-col justify-end items-center">
    <div class="relative top-5 bg-primary">
      <h1 class="sm:text-7xl m-0 text-5xl text-white p-2 text-fancy">
        <img src="/img/image.png" alt="" class="w-[600px]">
      </h1>
    </div>
  </div>
  <div class="bg-white border-t border-primary">
    <UContainer class="px-2 py-7 mx-auto max-w-[1500px]">
      <LanguageBox language-prop="at">
        <p class="max-w-[1000px] mx-auto">Herzlich Willkommen bei der Mikroskop-Zahnheilkunde! In unserer Ordination
          werden alle zahnmedizinischen Behandlungen mit dem Mikroskop durchgeführt. Als Patient/in haben sie dadurch
          zahlreiche Vorteile.</p>
      </LanguageBox>
      <LanguageBox language-prop="ee">
        <p>Tere tulemast mikroskoobiga hambaravisse!
          Meie kliinikus teostatakse kõik hambaraviteenused professionaalse mikroskoobi abil,
          mis annab teile kui patsiendile, mitmeid eeliseid.</p>
      </LanguageBox>
      <LanguageBox language-prop="ru"></LanguageBox>
      <LanguageBox language-prop="en"></LanguageBox>
      <div class="md:flex shadow rounded p-2 min-h-[25em] bg-gray-100 mb-[3em]">
        <div class="md:w-[50%] md:px-2">
          <LanguageBox language-prop="at">
            <h3>Mikroskop</h3>
            <p>Dank der mehrfachen Vergrößerung ermöglicht das Mikroskop, selbst feinste Strukturen im Mundraum präzise
              zu
              erkennen und zu behandeln. Dadurch habe ich als Ihre Zahnärztin die Möglichkeit Wurzelbehandlungen,
              Füllungen oder auch Hygienebehandlungen ganz genau durchzuführen</p>
            <p>Verbesserter Sicht führt zu minimal-invasiven Eingriffen am Zahn. Das bedeutet, es wird nur so wenig
              Zahnsubtantz entfernt, wie unbedingt notwendig. Darüber hinaus hilft das Mikroskop, mögliche Probleme
              frühzeitig zu erkennen, was präventive Behandlungen begünstigt und größere Eingriffe oft überflüssig
              macht.
            </p>
          </LanguageBox>
          <LanguageBox language-prop="ee">
            <p>Tänu mitmekordsele suurendusele võimaldab mikroskoop tuvastada ja ravida ka
              kõige peenemaid struktuure suuõõnes, mis tagab hambaarstile võimaluse läbi viia
              kõik protseduurid äärmise täpsusega. Ravi käigus eemaldatakse hambalt ainult nii
              vähe hambakudet kui hädavajalik.</p>
          </LanguageBox>
          <LanguageBox language-prop="ru"></LanguageBox>
          <LanguageBox language-prop="en"></LanguageBox>
        </div>
        <img src="/img/20240916-GZ1A8345.jpg" alt="" class="md:w-[50%] border border-gray-200 p-2 object-cover format">
      </div>
      <div class="md:flex shadow rounded p-2 min-h-[25em] bg-gray-100 mb-[3em]">
        <img src="/img/20240916-GZ1A8208-1.jpg" alt="" class="md:w-[50%] border border-gray-200 p-2 object-cover format">
        <div class="md:w-[50%] md:px-2">
          <LanguageBox language-prop="at">
            <h3>Videobrille</h3>
            <p>Zudem sorgt das Mikroskop für eine exzellente Arbeits-Qualität. Dies ermöglicht bei jedem Schritt der
              Behandlung exakt nachzuvollziehen was geschieht, um optimale Ergebnisse zu erreichen. Für Sie bedeutet
              dies
              eine langfristig bessere Zahngesundheit und ästhetisch überzeugende Ergebnisse.</p>
            <p>Während der Behandlung können Sie sich als Patient/in ein Bild meiner Arbeit machen und über Videobrille
              selber mitverfolgen, was gerade mit Ihrem Zahn passiert. Alternativ können Sie sich bei Ihrem
              Lieblingsfilm
              entspannen.</p>
          </LanguageBox>
          <LanguageBox language-prop="ee">
            <p>
              Samuti õnnestub meil avastada võimalikke
              probleeme eriti varakult, mis soodustab ennetavat ravi ja muudab sageli suuremad
              sekkumised mittevajalikuks. Teie jaoks tähendab see pikaajaliselt paremat
              suuhügieeni ja esteetiliselt veenvaid tulemusi.
            </p>
            <p>Ravi ajal saate patsiendina minu tööd jälgida videoprillide abil või lõõgastuda ja
              nautida oma lemmikfilmi.</p>
          </LanguageBox>
          <LanguageBox language-prop="ru"></LanguageBox>
          <LanguageBox language-prop="en"></LanguageBox>
        </div>
      </div>
      <div class="bg-gray-100 mb-[3em] p-2 shadow rounded">
        <LanguageBox language-prop="at" class="flex items-center"><strong class="me-auto">Ich biete auch Mundhygiene</strong> <ULink class="bg-primary text-white py-1 px-2 rounded hover:bg-primary-600">Termin Buchen</ULink></LanguageBox>
        <LanguageBox language-prop="ee"></LanguageBox>
        <LanguageBox language-prop="ru"></LanguageBox>
        <LanguageBox language-prop="en"></LanguageBox>
      </div>
      <LanguageBox language-prop="at">
        <h3 class="text-center">Vertrauen Sie auf modernste Technik und profitieren Sie von der Behandlung mit dem
          Mikroskop in unserer Ordination – für Ihr strahlendes Lächeln und Ihre Gesundheit!</h3>
      </LanguageBox>
      <LanguageBox language-prop="ee">
        <h3 class="text-center">Usaldage kaasaegset tehnoloogiat, mida võimaldab mikroskoobiga ravi meie
          kliinikus – teie särava naeratuse ja tervise heaks!</h3>
      </LanguageBox>
      <LanguageBox language-prop="ru"></LanguageBox>
      <LanguageBox language-prop="en"></LanguageBox>
    </UContainer>
  </div>
  <Footer />
</template>

<script setup>
</script>

<style scoped>
.format {
  aspect-ratio: 16/9;
}


p {
  font-size: large;
}

.fixed-bg {
  background-size: cover;
  background-position-x: center;
  background-position-y: 30%;
}
</style>
