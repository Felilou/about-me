<template>
  <div>
    <h1 class="mb-3">Home</h1>
    <div class="container-fluid p-0">
      <div class="row row-cols-lg-2 row-cols-sm-1 row-cols-1">
        <div class=" col-lg-8 rounded">
          <h5>main info</h5>
          <p><Image /></p>
          <p><PlaceholderText/></p>
          <p><Image /></p>
          <p><PlaceholderText/></p>
          <p><Image /></p>
          <p><PlaceholderText/></p>
        </div>
        <div class="col-lg-4 col-12">
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
