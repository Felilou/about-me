<template>
  <main id="wrapper">
    <div id="spacer" />
    <div class="container-fluid">
        <div class="row">
            <div class="col">
                Willkommen
            </div>
        </div>
    </div>
  </main>
</template>

<script setup></script>

<style scoped>
#wrapper {
  background-image: url('https://koenigswieser.info/images/20240916-GZ1A8208-1.jpg');
  background-size: contain;
  background-repeat: no-repeat;
  background-position: 50% 0%;
  z-index: -1;
  min-height: 200vh;
}

#header {
    background-image: linear-gradient(rgba(var(--bs-body-bg-rgb),0), rgba(var(--bs-body-bg-rgb),1)) !important; 
}

#spacer {
    padding-top: 70vh;
}

</style>
