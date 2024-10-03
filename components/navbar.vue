<template>
  <nav class="navbar navbar-expand-sm py-4 sticky-top bg-body">
    <div class="container-fluid d-flex align-items-baseline">
      <a class="navbar-brand" href="#">Nav</a>
      <button
        class="navbar-toggler border-0 px-2"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasNavbar"
        aria-controls="offcanvasNavbar"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div
        class="offcanvas offcanvas-end bg-none"
        tabindex="-1"
        id="offcanvasNavbar"
        aria-labelledby="offcanvasNavbarLabel"
      >
        <div class="offcanvas-header py-4">
          <h1 class="offcanvas-title" id="offcanvasNavbarLabel">Menü</h1>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div class="offcanvas-body">
          <ul class="navbar-nav flex-grow-1 d-flex border-bottom">
            <li :class="'nav-item my-1 my-sm-0 me-0 me-sm-2 ' + (active === 1 ? 'active-link' : 'contains-link')" @click="active = 1">
              <NuxtLink :class=" 'nav-link rounded px-2 py-2 ' + (active === 1 ? 'bg-secondary bg-opacity-10 fw-bold' : '')" aria-current="page" to="/">
                <Icon name="heroicons:home-solid" class="me-1" />Home
              </NuxtLink>
            </li>
            <li :class="'nav-item my-1 my-sm-0 me-0 me-sm-2 ' + (active === 2 ? 'active-link' : 'contains-link')" @click="active = 2">
              <NuxtLink :class=" 'nav-link rounded px-2 py-2 ' + (active === 2 ? 'bg-secondary bg-opacity-10 fw-bold' : '')" aria-current="page" to="/about-me">
                <Icon name="heroicons:user-solid" class="me-1" />About me
              </NuxtLink>
            </li>
            <li :class="'nav-item my-1 my-sm-0 me-0 me-sm-2 ' + (active === 3 ? 'active-link' : 'contains-link')" @click="active = 3">
              <NuxtLink :class=" 'nav-link rounded px-2 py-2 ' + (active === 3 ? 'bg-secondary bg-opacity-10 fw-bold' : '')" aria-current="page" to="/kontakt">
                <Icon name="heroicons:phone-solid" class="me-1" />Kontakt
              </NuxtLink>
            </li>
            
            <hr class="my-2" />
            <li class="nav-item ms-auto mb-2 mb-sm-0 me-0 me-sm-2">
              <LanguageSelect />
            </li>
            <li class="nav-item mb-2 mb-sm-0 d-flex align-items-center">
              <ThemeSwitch class="ms-auto" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
</template>

<script lang="ts" setup>
const active = ref(1);
</script>

<style scoped>
.contains-link:hover {
  border-bottom: 2px solid var(--bs-secondary);
  border-radius: 0.1rem;
}

.active-link {
  border-bottom: 2px solid var(--bs-primary);
  border-radius: 0.1rem;
}

.nav-item {
  padding-bottom: 0.3rem;
}

.navbar-toggler {
  outline: none !important;
  box-shadow: none !important;
}

@media only screen and (max-width: 576px) {
  
  .contains-link:hover {
    border-bottom: 0px !important;
    border-radius: 0px !important;
  }

  .active-link {
    border-bottom: 0px !important;
    border-radius: 0px !important;
  }
}
</style>
