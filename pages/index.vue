<template>
  <main id="wrapper">
    <div id="spacer" class="d-flex justify-content-end flex-column">
      <div class="display-1 rounded shadow h1 mx-auto mb-5 p-1" id="header">Willkommmen</div>
      <div id="transition" class=""></div>
    </div>
    <div class="container-fluid p-3 bg-body m-0">
      <div class="row">
        <div class="col">
          <p>Herzlich Willkommen bei der Mikroskop-Zahnheilkunde! In unserer Ordination werden alle zahnmedizinischen Behandlungen mit dem Mikroskop durchgeführt. Als Patient/in haben sie dadurch zahlreiche Vorteile.</p>
          <p>Dank der mehrfachen Vergrößerung ermöglicht das Mikroskop, selbst feinste Strukturen im Mundraum präzise zu erkennen und zu behandeln. Dadurch habe ich als Ihre Zahnärztin die Möglichkeit Wurzelbehandlungen, Füllungen oder auch Hygienebehandlungen ganz genau durchzuführen.</p>
          <p><img src="/img/20240916-GZ1A8208-1.jpg" alt="" class="w-100 rounded shadow"></p>
          <p>Verbesserter Sicht führt zu minimal-invasiven Eingriffen am Zahn. Das bedeutet, es wird nur so wenig Zahnsubtantz entfernt, wie unbedingt notwendig. Darüber hinaus hilft das Mikroskop, mögliche Probleme frühzeitig zu erkennen, was präventive Behandlungen begünstigt und größere Eingriffe oft überflüssig macht.</p>
          <p>Zudem sorgt das Mikroskop für eine exzellente Arbeits-Qualität. Dies ermöglicht bei jedem Schritt der Behandlung exakt nachzuvollziehen was geschieht, um optimale Ergebnisse zu erreichen. Für Sie bedeutet dies eine langfristig bessere Zahngesundheit und ästhetisch überzeugende Ergebnisse.</p>
          <p>Während der Behandlung können Sie sich als Patient/in ein Bild meiner Arbeit machen und über Videobrille selber mitverfolgen, was gerade mit Ihrem Zahn passiert. Alternativ können Sie sich bei Ihrem Lieblingsfilm entspannen.</p>
          <p>Vertrauen Sie auf modernste Technik und profitieren Sie von der Behandlung mit dem Mikroskop in unserer Ordination - für Ihr strahlendes Lächeln und Ihre Gesundheit!</p>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup></script>

<style scoped>
#wrapper {
  background-image: url('/img/20240916-GZ1A8300-1.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 0px -300px;
  background-attachment: fixed;
}

#transition {
  height: 5vw;
  max-height: 50px;
  background-image: linear-gradient(rgba(var(--bs-body-bg-rgb), 0), rgba(var(--bs-body-bg-rgb), 1));
}

#header {
  transform: translate(50vw 50vh);
  color: var(--bs-primary);
  font-weight: bold;
  background-color: rgba(var(--bs-body-bg-rgb), 0.7);
  height: fit-content;
}

#spacer {
  max-height: 80vh;
  height: 80vw;
  min-height: 50vh;
}

.row {
  max-width: 1000px;
  margin-left: auto;
  margin-right: auto
}

@media only screen and (max-width: 772px) {
  #wrapper {
    background-position: 30% -50px !important;
  }
}

@media only screen and (max-width: 1800px) {
  #wrapper {
    background-position: 30% -100px;
  }
}

</style>
