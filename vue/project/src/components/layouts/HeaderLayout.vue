<template>
  <!-- <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/databinding/string">String</router-link> |
    <router-link to="/databinding/html">HTML</router-link> |
  </nav> -->
  <nav class="navbar navbar-expand-lg bg-light">
    <div class="container-fluid">
      <a class="navbar-brand" @click="goToMenu('/')">개발자의품격</a>
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
            <a
              class="nav-link"
              :class="{ active: $route.path === '/' }"
              aria-current="page"
              @click="goToMenu('/')"
              >Home</a
            >
          </li>
          <li class="nav-item">
            <a
              class="nav-link"
              :class="{ active: $route.path === '/template/p1/single' }"
              @click="goToMenu('/template/p1/single')"
              >SingleViewEdit</a
            >
          </li>
          <li class="nav-item">
            <a
              class="nav-link"
              :class="{ active: $route.path === '/template/p2/multiple' }"
              @click="goToMenu('/template/p2/multiple')"
              >MultipleEdit</a
            >
          </li>
          <li class="nav-item">
            <a
              class="nav-link"
              :class="{ active: $route.path === '/template/p3/list' }"
              @click="goToMenu('/template/p3/list')"
              >ListToDetail</a
            >
          </li>
          <li class="nav-item">
            <a
              class="nav-link"
              :class="{ active: $route.path === '/template/p4/master' }"
              @click="goToMenu('/template/p4/master')"
              >MasterDetail</a
            >
          </li>
          <li class="nav-item">
            <a
              class="nav-link"
              :class="{ active: $route.path === '/template/p5/shuttle' }"
              @click="goToMenu('/template/p5/shuttle')"
              >Shuttle</a
            >
          </li>
        </ul>
        <form class="d-flex" role="search">
          <input
            class="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button class="btn btn-outline-success" type="submit">Search</button>
        </form>
      </div>
    </div>
  </nav>
</template>
<script>
export default {
  methods: {
    goToMenu(path) {
      this.$router.push({ path: path })
    }
  }
}
</script>
