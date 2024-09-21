<template>
  <div class="mx-auto my-lg-3" style="max-width: 1000px">
    <Navbar />
    <NuxtPage class="px-3 py-3" />
  </div>
</template>

<style>
.bg-blue {
  background-color: aqua;
}
.bg-placeholder {
  background-color: #b6b6b6;
  opacity: 0.8;
  background-image: radial-gradient(#fafafa 0.5px, transparent 0.5px),
    radial-gradient(#fafafa 0.5px, #b6b6b6 0.5px),
    repeating-linear-gradient(
      -45deg,
      #fafafa,
      #fafafa 5px,
      #b6b6b6 5px,
      #b6b6b6 25px
    );
  background-size: 20px 20px;
  background-position: 0 0, 10px 10px;
}
</style>
