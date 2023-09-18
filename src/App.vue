<template>
  <Header />
  <!-- <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/favs">Избранное</router-link>
  </div> -->
  <router-view/>
  <UpBtn />
</template>

<script>
import Header from '@/components/Header.vue';
import UpBtn from '@/components/UpBtn.vue';

export default {
  components: {Header, UpBtn},
}
</script>

<style>
#app {
  font-family: Roboto, sans-serif;
  /* -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50; */
}
</style>
