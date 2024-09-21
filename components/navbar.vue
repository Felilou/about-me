<template>
  <nav class="navbar navbar-expand-lg rounded navbar-sticky ">
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
            <NuxtLink to="/" class="nav-link">Home</NuxtLink>
          </li>
          <li class="nav-item">
            <NuxtLink to="/team" class="nav-link">Team</NuxtLink>
          </li>
          <li class="nav-item">
            <NuxtLink to="/ordination" class="nav-link">Ordination</NuxtLink>
          </li> 
          <li class="nav-item">
            <NuxtLink to="/kontakt" class="nav-link">Kontakt</NuxtLink>
          </li>
        </ul>
        <form class="d-flex" role="search">
          
        </form>
      </div>
    </div>
  </nav>
  <div class="border-bottom"></div>
</template>
