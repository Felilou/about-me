<template>
  <div id="wrapper">
    <div class="sticky-top text-center d-flex align-items-stretch" style="z-index: -2;" id="heroImg">
      <div class="position-absolute start-50 translate-middle" style="top: 75%;">
        <h1 class="bg-body rounded p-2">aökdwla</h1>
      </div>
    </div>
    
    <div class="container-fluid bg-body p-0" >
      <div class="transition position-relative sticky-bottom p-2" style="height: 1.5rem; bottom: 1.5rem; z-index: -2;"></div>
      <div class="container-fluid m-0 mx-auto" style="max-width: 1000px;">
      <div class="row">
        <div class="col bg-body">
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
    </div>
  </div>
    
</template>

<script setup></script>

<style scoped>
#heroImg {
  background-image: url('/img/20240916-GZ1A8139.jpg');
  height: 80vh;
  background-size: cover;
  background-position: center top;
}

.transition {
  background-image: linear-gradient(rgba(var(--bs-body-bg-rgb), 0), rgba(var(--bs-body-bg-rgb), 1));
}

@media only screen and (max-width: 576px) {
  #heroImg {
  
  height: 60vh;
  
}
}
</style>
