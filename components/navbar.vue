<template>
  <div class="sticky-top">
    <nav class="navbar navbar-expand-lg bg-body rounded">
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
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <NuxtLink to="/" class="nav-link">Home <i class="bi bi-house-fill"></i></NuxtLink>
          </li>
          <li class="nav-item">
            <NuxtLink to="/team" class="nav-link">Team</NuxtLink>
          </li>
          <li class="nav-item">
            <NuxtLink to="/ordination" class="nav-link">Ordination</NuxtLink>
          </li> 
          <li class="nav-item">
            <NuxtLink to="/kontakt" class="nav-link">Kontakt <i class="bi bi-telephone-fill"></i></NuxtLink>
          </li>
        </ul>
        <form class="d-flex" role="search">
          
        </form>
      </div>
    </div>
  </nav>
  <div class="border-bottom"></div>
  </div>
</template>

<style>
.nav-link {
  width: fit-content;
	color: #18272F;
  position: relative;
  text-decoration: none;
}

.nav-link::before {
  content: '';
  position: absolute;
  width: 100%;
  height: 1px;
  border-radius: 1px;
  background-color: #18272F;
  bottom: 0;
  left: 0;
  transform-origin: right;
  transform: scaleX(0);
  transition: transform .3s ease-in-out;
}

.nav-link:hover::before {
  transform-origin: left;
  transform: scaleX(1);
}
</style>
