<template>
  <ContainerWithHeroImg img-url="/img/20240916-GZ1A8208-1.jpg">
    <template #title>
      <div class="flex flex-col items-left justify-center h-[100%]">
        <h1
          class="text-4xl lg:text-8xl p-2 bg-primary/75 animate__animated animate__fadeInRightBig relative left-5 top-10 w-fit text-white dark:text-black">
          Herzlich</h1>
        <h1
          class="text-4xl lg:text-8xl p-2 bg-primary/75 animate__animated animate__fadeInLeftBig relative left-10 top-12 w-fit text-white dark:text-black">
          Wilkommen</h1>
      </div>
    </template>
    <template #content>
      <div class="mx-auto" style="max-width: 1000px;">
        <LanguageBox :languageProp="'at'">
          <p>
            Herzlich Willkommen bei der Mikroskop-Zahnheilkunde! In unserer Ordination
            werden alle zahnmedizinischen Behandlungen mit dem Mikroskop durchgeführt. Als
            Patient/in haben sie dadurch zahlreiche Vorteile:
          </p>
          <p>
            Dank der mehrfachen Vergrößerung, ermöglicht das Mikroskop, selbst feinste
            Strukturen im Mundraum präzise zu erkennen und zu behandeln. Dadurch habe ich,
            als Ihre Zahnärztin, die Möglichkeit, Wurzelkanalbehandlungen, Füllungen oder auch
            Hygienebehandlungen ganz genau durchzuführen.
          </p>
          <p>
            Eine verbesserte Sicht führt zu minimal invasiven Eingriffen am Zahn. Das bedeutet,
            es wird nur so wenig Zahnsubstanz entfernt, wie unbedingt notwendig. Darüber
            hinaus hilft das Mikroskop, mögliche Probleme frühzeitig zu erkennen, was
            präventive Behandlungen begünstigt und größere Eingriffe oft überflüssig macht.
          </p>
          <p>
            Zudem sorgt das Mikroskop für eine exzellente Arbeitsqualität. Dies ermöglicht,
            jeden Schritt der Behandlung exakt nachvollziehen zu können, um optimale
            Ergebnisse zu erreichen. Für Sie bedeutet dies eine langfristig bessere
            Zahngesundheit und ästhetisch überzeugende Ergebnisse.
          </p>
          <p>
            Während der Behandlung können Sie sich als Patient/in ein Bild meiner Arbeit
            machen und über eine Videobrille jeden Schritt in Echtzeit mitverfolgen. Alternativ
            können Sie sich bei Ihrem Lieblingsfilm entspannen.
          </p>
          <p>
            Vertrauen Sie auf die modernste Technik und profitieren Sie von der Behandlung mit
            dem Mikroskop in unserer Ordination – für Ihr strahlendes Lächeln und Ihre
            Gesundheit!
          </p>
        </LanguageBox>
        <LanguageBox :languageProp="'ee'">
          <h1 class="text-lg fw-bold">Tere tulemast mikroskoobiga hambaravisse!</h1>
          <p>
            Meie kliinikus teostatakse kõik hambaraviteenused professionaalse mikroskoobi abil,
            mis annab teile kui patsiendile, mitmeid eeliseid.
          </p>
          <p>
            Tänu mitmekordsele suurendusele võimaldab mikroskoop tuvastada ja ravida ka
            kõige peenemaid struktuure suuõõnes, mis tagab hambaarstile võimaluse läbi viia
            kõik protseduurid äärmise täpsusega. Ravi käigus eemaldatakse hambalt ainult nii
            vähe hambakudet kui hädavajalik. Samuti õnnestub meil avastada võimalikke
            probleeme eriti varakult, mis soodustab ennetavat ravi ja muudab sageli suuremad
            sekkumised mittevajalikuks. Teie jaoks tähendab see pikaajaliselt paremat
            suuhügieeni ja esteetiliselt veenvaid tulemusi.
          </p>
          <p>
            Ravi ajal saate patsiendina minu tööd jälgida videoprillide abil või lõõgastuda ja
            nautida oma lemmikfilmi.
          </p>
          <p>
            Usaldage kaasaegset tehnoloogiat, mida võimaldab mikroskoobiga ravi meie
            kliinikus – teie särava naeratuse ja tervise heaks!
          </p>
        </LanguageBox>
      </div>
    </template>
  </ContainerWithHeroImg>
</template>

<script setup>
</script>

<style scoped></style>
