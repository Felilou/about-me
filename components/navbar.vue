<template>
  <nav class="navbar navbar-expand-sm py-4 sticky-top">
    <div class="container-fluid d-flex align-items-baseline">
      <a class="navbar-brand" href="#">Nav</a>
      <button
        class="navbar-toggler border-0"
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
            <li
              :class="
                'nav-item ' +
                (active === 1 ? 'border-bottom border-primary' : 'border-none')
              "
              @click="active = 1"
            >
              <NuxtLink
                :class="
                  'nav-link rounded px-2 ' +
                  (active === 1
                    ? 'bg-secondary-subtle bg-opacity-50'
                    : 'bg-sm-secondary bg-opacity-10')
                "
                aria-current="page"
                to="/"
                ><Icon name="heroicons:home-solid" class="me-1" />Home</NuxtLink
              >
            </li>
            <li
              :class="
                'nav-item my-1 my-sm-0 ' +
                (active === 2 ? 'border-bottom border-primary' : 'border-none')
              "
              @click="active = 2"
            >
              <NuxtLink
                :class="
                  'nav-link rounded px-2 ' +
                  (active === 2
                    ? 'bg-secondary-subtle bg-opacity-50'
                    : 'bg-sm-secondary bg-opacity-10')
                "
                aria-current="page"
                to="/about-me"
                ><Icon name="heroicons:user-16-solid" class="me-1" />Über
                mich</NuxtLink
              >
            </li>
            <li
              :class="
                'nav-item ' +
                (active === 3 ? 'border-bottom border-primary' : 'border-none')
              "
              @click="active = 3"
            >
              <NuxtLink
                :class="
                  'nav-link rounded px-2 ' +
                  (active === 3
                    ? 'bg-sm-secondary-subtle bg-opacity-10'
                    : 'bg-sm-secondary-subtle bg-opacity-10')
                "
                aria-current="page"
                to="/kontakt"
                ><Icon
                  name="heroicons:phone-solid"
                  class="me-1"
                />Kontakt</NuxtLink
              >
            </li>
            <hr class="my-2" />
            <li class="nav-item ms-sm-auto">
              <select
                class="form-select rounded border-0 bg-secondary-subtle"
                aria-label="Default select example"
              >
                <option value="at" selected>at</option>
                <option value="ee" >ee</option>
              </select>
            </li>
            <li class="nav-item">
              <div class="form-check form-switch">
                <input
                  class="form-check-input"
                  type="checkbox"
                  role="switch"
                  id="flexSwitchCheckDefault"
                />
                <label class="form-check-label" for="flexSwitchCheckDefault"
                  >mode</label
                >
              </div>
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

<style>
.nav-link:hover {
  background-color: var(--bs-secondary-bg-subtle);
}

.nav-item {
  padding-bottom: 0.3rem;
}
</style>
