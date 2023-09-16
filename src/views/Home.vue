<template>
  <div class="home">
    <SearchBar @hideRandomPhotos="hideHomePhotos" @showRandomPhotos="showHomePhotos" />
    <div class="random-photos" v-if="showPhotos">
      <img v-for="photo in randomPhotos" :key="photo.id" :src="photo.urls.small" :alt="photo.alt_description" />
    </div>
  </div>
</template>

<script>
  import SearchBar from '@/components/SearchBar.vue'
  import axios from "axios";

  export default {
    name: 'Home',
    components: {
      SearchBar
    },
    data() {
      return {
        randomPhotos: [],
        showPhotos: true,
      };
    },
    mounted() {
      this.fetchPhotos();
    },
    methods: {
      async fetchPhotos() {
        try {
          const response = await axios.get(
            "https://api.unsplash.com/photos/random?count=9&client_id=Af-22R9C5Ra7DroQiRoqVuroD9nPfSiBd98eW8uLQUs"
          );
          this.randomPhotos = response.data;
        } catch (error) {
          console.error(error);
        }
      },
      hideHomePhotos() {
        this.showPhotos = false;
      },
      showHomePhotos() {
        this.showPhotos = true;
      },
    },
  }
</script>

<style>
  .random-photos {
    display: flex;
    flex-wrap: wrap;
    border-top: 10px solid red;
  }

  .photos img {
    width: 33%;
    height: auto;
  }
</style>