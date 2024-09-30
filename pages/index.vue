<template>
  <div>
    <h1 class="mb-2">Home</h1>
    <div class="container-fluid p-0">
      <div class="row row-cols-lg-2 row-cols-sm-1 row-cols-1">
        <div class="col-lg-4 col-12 mt-lg-0 mt-2">
          <div class="container-fluid py-3 bg-body-tertiary border rounded shadow">
            <div class="row row-cols-lg-1 row-cols-sm-2 row-cols-1">
              <div class="col-lg-12 col-sm-6 col-12 mb-sm-0 mb-2 mb-lg-2">
                <ContactCard />
              </div>
              <div class="col">
                <OpenHoursTable />
              </div>  
            </div>
          </div>
        </div>
        <div class="col-lg-8 mt-lg-0 mt-4">
          <p><Image :src="'https://koenigswieser.info/images/20240916-GZ1A8208.jpg'"/></p>
          <p><MultilangugalText :ger="'Herzlich Willkommen bei der Mikroskop-Zahnheilkunde! In unserer Ordination werden alle zahnmedizinischen Behandlungen mit dem Mikroskop durchgeführt. Als Patient/in haben sie dadurch zahlreiche Vorteile.'" :est="'no'"/></p>
          <p><MultilangugalText :ger="'Dank der mehrfachen Vergrößerung ermöglicht mir das Mikroskop, selbst feinste Strukturen im Mundraum präzise zu erkennen und zu behandeln. Dadurch habe ich als Ihre Zahnärztin die Möglichkeit Wurzelbehandlungen, Füllungen oder auch Hygienebehandlungen ganz genau durchzuführen'" :est="'no'"/></p>
          <p><MultilangugalText :ger="'Verbesserter Sicht führt zu minimal-invasiven Eingriffen am Zahn. Das bedeutet, es wird nur so wenig Zahnsubtantz entfernt, wie unbedingt notwendig. Darüber hinaus hilft mir das Mikroskop, mögliche Probleme frühzeitig zu erkennen, was präventive Behandlungen begünstigt und größere Eingriffe oft überflüssig macht.'" :est="'no'"/></p>
          <p><Image :src="'https://koenigswieser.info/images/20240916-GZ1A8350.jpg'"/></p>
          <p><MultilangugalText :ger="'Zudem sorgt das Mikroskop für eine exzellente Arbeits-Qualität. Dies ermöglicht mir bei jedem Schritt der Behandlung exakt nachzuvollziehen was geschieht, um optimale Ergebnisse zu erreichen. Für Sie bedeutet dies eine langfristig bessere Zahngesundheit und ästhetisch überzeugende Ergebnisse'" :est="'no'"/></p>
          <p><MultilangugalText :ger="'Zudem sorgt das Mikroskop für eine exzellente Arbeits-Qualität. Dies ermöglicht mir bei jedem Schritt der Behandlung exakt nachzuvollziehen was geschieht, um optimale Ergebnisse zu erreichen. Für Sie bedeutet dies eine langfristig bessere Zahngesundheit und ästhetisch überzeugende Ergebnisse'" :est="'no'"/></p>
          <p><MultilangugalText :ger="'Während der Behandlung können Sie sich als Patient/in ein Bild meiner Arbeit machen und über Videobrille selber mitverfolgen, was gerade mit Ihrem Zahn passiert. Alternativ können Sie sich bei Ihrem Lieblingsfilm entspannen'" :est="'no'" /></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup></script>

<style>
td {
  text-align: right;
}
</style>
