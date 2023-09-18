<template>
  <Header />
  <UpBtn />
  <router-view/>
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
}
</style>
