<template>
  <div>
    <div class="container-fluid bg-body">
      <div class="row row-cols-1 row-cols-sm-2 gap-sm-0 gap-2">
        <div class="col">
          <div class="card rounded-0 border-0">
            <div class="card-body">
              <h3 class="card-title pb-1 fw-bold border-bottom">Öffnungszeiten</h3>
              <p class="card-text">
                <TimeTable/>
              </p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card rounded-0 border-0">
            <div class="card-body">
              <h3 class="card-title pb-1 fw-bold border-bottom">Kontakt</h3>
              <p class="card-text">
                <KontaktTable/>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup></script>

<style scoped>
.card-title {
  border-bottom:2px solid var(--bs-primary) !important;
}
</style>
