<template>
  <div
    class="fixed-bg fixed w-screen h-screen -z-10 lg:bg-[url('/img/20240916-GZ1A8208.jpg')] bg-[url('/img/20240916-GZ1A8300-1.jpg')] ">
  </div>
  <div class="h-[75vh] flex flex-col justify-end items-center">
    <div class="relative top-5 bg-primary">
      <h1 class="sm:text-7xl m-0 text-5xl text-white p-2 text-fancy">Herzlich willkommen</h1>
    </div>
  </div>
  <div class="bg-white border-t border-primary">
    <UContainer class="px-2 py-7 mx-auto max-w-[1500px]">
      <p class="max-w-[1000px] mx-auto">Herzlich Willkommen bei der Mikroskop-Zahnheilkunde! In unserer Ordination
        werden alle zahnmedizinischen Behandlungen mit dem Mikroskop durchgeführt. Als Patient/in haben sie dadurch
        zahlreiche Vorteile.</p>
      <div class="md:flex shadow rounded p-2 min-h-[25em] bg-gray-100 mb-[3em]">
        <div class="md:w-[50%] md:px-2">
          <h3>Mikroskop</h3>
          <p>Dank der mehrfachen Vergrößerung ermöglicht das Mikroskop, selbst feinste Strukturen im Mundraum präzise zu
            erkennen und zu behandeln. Dadurch habe ich als Ihre Zahnärztin die Möglichkeit Wurzelbehandlungen,
            Füllungen oder auch Hygienebehandlungen ganz genau durchzuführen</p>
          <p>Verbesserter Sicht führt zu minimal-invasiven Eingriffen am Zahn. Das bedeutet, es wird nur so wenig
            Zahnsubtantz entfernt, wie unbedingt notwendig. Darüber hinaus hilft das Mikroskop, mögliche Probleme
            frühzeitig zu erkennen, was präventive Behandlungen begünstigt und größere Eingriffe oft überflüssig macht.
          </p>
        </div>
        <img src="/img/20240916-GZ1A8109.jpg" alt="" class="md:w-[50%] border border-gray-200 p-2 object-cover">
      </div>
      <div class="md:flex shadow rounded p-2 min-h-[25em] bg-gray-100 mb-[3em]">
        <img src="/img/20240916-GZ1A8139.jpg" alt="" class="md:w-[50%] border border-gray-200 p-2 object-cover">
        <div class="md:w-[50%] md:px-2">
          <h3>Videobrille</h3>
          <p>Zudem sorgt das Mikroskop für eine exzellente Arbeits-Qualität. Dies ermöglicht bei jedem Schritt der
            Behandlung exakt nachzuvollziehen was geschieht, um optimale Ergebnisse zu erreichen. Für Sie bedeutet dies
            eine langfristig bessere Zahngesundheit und ästhetisch überzeugende Ergebnisse.</p>
          <p>Während der Behandlung können Sie sich als Patient/in ein Bild meiner Arbeit machen und über Videobrille
            selber mitverfolgen, was gerade mit Ihrem Zahn passiert. Alternativ können Sie sich bei Ihrem Lieblingsfilm
            entspannen.</p>
        </div>
      </div>
      <h3 class="text-center mt-3 border-b pb-2 border-primary-200">Vertrauen Sie auf modernste Technik und profitieren Sie von der Behandlung mit dem
        Mikroskop in unserer Ordination – für Ihr strahlendes Lächeln und Ihre Gesundheit!</h3>
    </UContainer>
  </div>
</template>

<script setup>



</script>

<style scoped>
p {
  font-size: large;
}

.fixed-bg {
  background-position: center;
  background-size: cover;
}
</style>
