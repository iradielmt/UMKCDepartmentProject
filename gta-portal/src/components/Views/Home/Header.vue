<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Student's Portal</a>
      <button
       class="navbar-toggler"
       type="button"
       data-toggle="collapse"
       data-target="#navbarSupportedContent"
       aria-controls="navbarSupportedContent"
       aria-expanded="false"
       aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link class="nav-link active" aria-current="page" to="/">
              Home
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link active" aria-current="page" to="/info">
              Info
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link active" style="text-align:right;" aria-current="page" to="/login">
              Login
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "HeaderHome",
};


</script>
