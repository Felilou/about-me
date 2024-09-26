<template>
  <div class="sticky-top">
    <nav
      class="navbar navbar-expand-sm bg-body-tertiary border shadow rounded mt-lg-3"
    >
      <div class="container-fluid">
        <a class="navbar-brand" href="#">Navbar</a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav nav-pills mb-2 mb-sm-0 h-100 w-100">
            <li class="nav-item">
              <NuxtLink to="/" class="nav-link">Home</NuxtLink>
            </li>
            <li class="nav-item">
              <NuxtLink to="/about-me" class="nav-link">Über mich</NuxtLink>
            </li>
            <li class="nav-item">
              <NuxtLink to="/kontakt" class="nav-link">Kontakt</NuxtLink>
            </li>
            <li class="ms-auto nav-item">

            </li>
            <li class="nav-item dropdown d-sm-flex align-items-center mb-2 mt-3 me-2 mb-3 my-sm-0">
              <LanguageToggle />
            </li>
            <li class="nav-item border me-2"></li>
            <li class="nav-item dropdown d-sm-flex align-items-center mt-3 mb-2 my-sm-0">
              <ModeToggle />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<style>
.nav-link {
  padding: 0.25rem;
  width: fit-content;
  text-decoration: none;
}

.nav-link:hover {
  text-decoration: underline;
}
</style>
