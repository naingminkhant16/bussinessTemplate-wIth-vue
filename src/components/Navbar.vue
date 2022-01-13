<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
    <div class="container-fluid my-3">
      <span href="#" class="navbar-brand mx-5"
        ><i class="fab fa-js-square"></i> CoXer</span
      >
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse text-center" id="navbarNav">
        <div class="navbar-nav ms-auto mx-5">
          <router-link to="/" class="nav-item px-3 nav-link">Home</router-link>
          <router-link to="/about" class="nav-item px-3 nav-link"
            >About</router-link
          >

          <div class="nav-item dropdown px-3">
            <span
              class="nav-link dropdown-toggle"
              id="navbarDropdown"
              data-bs-toggle="dropdown"
              >More Pages</span
            >
            <ul class="dropdown-menu bg-light">
              <li>
                <router-link :to="{name:'MorePages',params:{page:'leftSidePage'}}" class="dropdown-item"
                  >Left-side page</router-link
                >
              </li>
              <li>
                <hr class="dropdown-divider" />
              </li>
              <li>
                <router-link :to="{name:'MorePages',params:{page:'rightSidePage'}}" class="dropdown-item"
                  >Right-side page</router-link
                >
              </li>
            </ul>
          </div>
          <router-link to="/contactUs" class="nav-item px-3 nav-link"
            >Contact us</router-link
          >

          <div>
            <button
              @click="signInOut"
              class="btn btn-outline-secondary px-3"
              type="submit"
            >
              Signin / Signout
            </button>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  methods: {
    signInOut() {
      this.$router.push("/signIn");
    },
  },
};
</script>

<style scoped>
.navbar .nav-link {
  text-transform: uppercase;
  font-size: 15px;
}
.navbar-brand i {
  font-size: 40px;
}

.navbar .nav-link:hover {
  background-color: rgba(128, 128, 128, 0.575);
  border-radius: 5px;
}
</style>