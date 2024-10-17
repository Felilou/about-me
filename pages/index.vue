<template>
  <div class="md:h-[80vh] h-[75vh] flex flex-col items-left justify-center">
    <div>
      <h1 class="text-8xl p-2 bg-primary/75 animate__animated animate__fadeInRightBig relative left-5 w-fit">Herzlich</h1><br>
    </div>
    <div>
      <h1 class="text-8xl p-2 bg-primary/75 animate__animated animate__fadeInLeftBig relative left-10 w-fit">Wilkommen</h1>
    </div>
  </div>
  <div class="animate__animated animate__fadeInUp">
    <div class="h-[20vh] md:h-[15vh] bg-gradient-to-b from-transparent to-white dark:to-gray-900"></div>
    <div class="bg-white text-black dark:bg-gray-900 dark:text-white">
      <div class="mx-auto py-5" style="max-width: 1000px;">
        <LanguageBox :languageProp="'at'">
    <p>
      <strong
        >Herzlich Willkommen bei der Mikroskop-Zahnheilkunde!</strong
      >
      In unserer Ordination werden alle zahnmedizinischen Behandlungen
      mit dem Mikroskop durchgeführt. Als Patient/in haben sie dadurch
      zahlreiche Vorteile.
    </p>
    <p>
      Dank der mehrfachen Vergrößerung ermöglicht das Mikroskop, selbst
      feinste Strukturen im Mundraum präzise zu erkennen und zu
      behandeln. Dadurch habe ich als Ihre Zahnärztin die Möglichkeit
      Wurzelbehandlungen, Füllungen oder auch Hygienebehandlungen ganz
      genau durchzuführen.
    </p>
    <p>
      Verbesserter Sicht führt zu minimal-invasiven Eingriffen am Zahn.
      Das bedeutet, es wird nur so wenig Zahnsubtantz entfernt, wie
      unbedingt notwendig. Darüber hinaus hilft das Mikroskop, mögliche
      Probleme frühzeitig zu erkennen, was präventive Behandlungen
      begünstigt und größere Eingriffe oft überflüssig macht.
    </p>
    <p>
      Zudem sorgt das Mikroskop für eine exzellente Arbeits-Qualität.
      Dies ermöglicht bei jedem Schritt der Behandlung exakt
      nachzuvollziehen was geschieht, um optimale Ergebnisse zu
      erreichen. Für Sie bedeutet dies eine langfristig bessere
      Zahngesundheit und ästhetisch überzeugende Ergebnisse.
    </p>
    <p>
      Während der Behandlung können Sie sich als Patient/in ein Bild
      meiner Arbeit machen und über Videobrille selber mitverfolgen, was
      gerade mit Ihrem Zahn passiert. Alternativ können Sie sich bei
      Ihrem Lieblingsfilm entspannen.
    </p>
    <p>
      Vertrauen Sie auf modernste Technik und profitieren Sie von der
      Behandlung mit dem Mikroskop in unserer Ordination - für Ihr
      strahlendes Lächeln und Ihre Gesundheit!
    </p>
  </LanguageBox>
  <LanguageBox :languageProp="'ee'">
    <p>Tere tulemast Dr. Ene Königswieser hambaravisse! Meie kliinikus teostatakse kõik hambaraviteenused mikroskoobi abil, millest on teile, kui patsiendile, mitmeid eeliseid.</p>
    <p>Tänu mitmekordsele suurendusele võimaldab mikroskoop tuvastada ja ravida ka kõige peenemaid struktuure suuõõnes. See annab hambaarstile võimaluse läbi viia kõik protseduurid äärmise täpsusega. Ravi käigus eemaldatakse hambalt ainult nii vähe hambakudet kui hädavajalik. Samuti õnnestub meil avastada võimalikke probleeme varakult, mis soodustab ennetavat ravi ja muudab sageli suuremad sekkumised mittevajalikuks.</p>
    <p>Mikroskoop tagab ka suurepärase kvaliteedi. See võimaldab igal ravietapil täpselt jälgida, mis toimub, et saavutada parimad tulemused. Teie jaoks tähendab see pikaajaliselt paremat suuhügieeni ja esteetiliselt veenvaid tulemusi. </p>
    <p>Ravi ajal saate patsientidena minu tööd jälgida videoprillide abil või lõõgastuda ja vaadata oma lemmikfilmi.</p>
    <p>Usaldage kaasaegset tehnoloogiat, mida võimaldab mikroskoobiga ravi meie kliinikus – teie särava naeratuse ja tervise heaks!</p>
  </LanguageBox>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
</style>
