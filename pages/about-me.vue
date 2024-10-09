<template>
  <div
    class="text-center d-flex align-items-stretch"
    style="z-index: -2"
    id="heroImg"
  ></div>
  <div id="spacer" class="d-flex align-items-end justify-content-center pb-5">
    <h1 class="display-1 monospace" id="heroHeading">Ene Königswieser</h1>
  </div>
  <div class="container-fluid bg-body p-0">
    <div class="container-fluid m-0 mx-auto" style="max-width: 1000px">
      <div class="row">
        <div class="col py-3">
          <LanguageBox :languageProp="'ee'">
            <figure>
              <blockquote class="blockquote" style="font-size: initial;">
                <p>Hambaravis on mulle südameasjaks ennetustöö, et naeratus säraks ning hambad oleksid terved. Aga kui suus juba probleem on tekkinud, siis on minu eesmärk hambaid ravida, mitte neid eemaldada. Töid teostan mikroskoobiga, et avastada väikseimadki hammaste ja igemete probleemid kohe algusjärgus ning ravida neid võimalikult vähe kahjustades. Olen hea suhtleja ja oleme seni koos patsientidega suutnud ka kõige suurema hirmu hambaravi ees seljatada. Räägin eesti, saksa, inglise, vene ja soome ning pisut ka itaalia keelt, mis annab mulle võimaluse inimesi paremini mõista.</p>
                <p>Töövabal ajal meeldib mulle pildistada inimesi ja olukordi, et jäädvustada erilisi hetki. Kunagise kunstikooli õpilasena naudin ka joonistamist ja ilu loomist enda ümber.</p>
                <p>Pean oluliseks enda vormis hoidmist nii füüsiliselt kui vaimselt, mistõttu tegelen mitmete spordialadega ja korraliku põhjamaalasena harrastan ka talisuplust. </p>
              </blockquote>
              <figcaption class="blockquote-footer">
                <cite title="Source Title"><h3>Dr. Ene Königswieser</h3></cite>
              </figcaption>
            </figure>
          </LanguageBox>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
#heroImg {
  background-image: url("/img/20240916-GZ1A8139.jpg");
  height: 100vh;
  width: 100vw;
  background-size: cover;
  background-position: center top;
  position: fixed;
}

strong {
  border-bottom: 2px solid var(--bs-primary) !important;
}

.transition {
  background-image: linear-gradient(
    rgba(var(--bs-body-bg-rgb), 0),
    rgba(var(--bs-body-bg-rgb), 1)
  );
}

#spacer {
  height: 80vh !important;
  background-image: linear-gradient(
    rgba(var(--bs-body-bg-rgb), 0) 60%,
    rgba(var(--bs-body-bg-rgb), 1) 95%
  );
}
</style>
