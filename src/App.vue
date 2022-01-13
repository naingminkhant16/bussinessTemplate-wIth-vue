<template>
  <div id="nav">
    <!-- <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> -->
    <Navbar></Navbar>
  </div>
  <router-view />
  <div>
    <Contact></Contact>
    <Footer></Footer>
  </div>
</template>
<script>
import Contact from './components/Contact'
import Footer from './components/Footer'
import Navbar from "./components/Navbar";
export default {
  components: {
    Contact,
    Footer, Navbar },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  /* color: #2c3e50; */
}

#nav {
  list-style-type: none;
  margin: 0;
  padding: 0;
 
}

#nav a.router-link-exact-active {
  color: orange;
}
</style>
