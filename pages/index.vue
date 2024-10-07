<template>
  <main id="wrapper">
    <div id="spacer" class="d-flex text-center justify-content-center align-items-end">
      <h1 class="display-1 p-2 rounded shadow" id="header">Willkommmen</h1>
    </div>
    <div class="container-fluid p-3 bg-body m-0">
      <div class="row">
        <div class="col">
          <p>Herzlich Willkommen bei der Mikroskop-Zahnheilkunde! In unserer Ordination werden alle zahnmedizinischen Behandlungen mit dem Mikroskop durchgeführt. Als Patient/in haben sie dadurch zahlreiche Vorteile.</p>
          <p>Dank der mehrfachen Vergrößerung ermöglicht das Mikroskop, selbst feinste Strukturen im Mundraum präzise zu erkennen und zu behandeln. Dadurch habe ich als Ihre Zahnärztin die Möglichkeit Wurzelbehandlungen, Füllungen oder auch Hygienebehandlungen ganz genau durchzuführen.</p>
          <p><img src="https://koenigswieser.info/images/20240916-GZ1A8208.jpg" alt="" class="w-100"></p>
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
  background-image: url('https://koenigswieser.info/images/20240916-GZ1A8334-1.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 40% 0%;
  background-attachment: fixed;
}

#header {
  transform: translate(50vw 50vh);
  color: var(--bs-primary);
  font-weight: bold;
  background-color: rgba(var(--bs-secondary-bg-rgb), 0.7);
  height: fit-content;
}

#spacer {
  height: 70vh;
  padding-bottom: 5rem;
}

@media only screen and (max-width: 733px) {
  #wrapper {
    background-size: cover;
  }
}

</style>
