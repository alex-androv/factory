<template>
  <SearchBar @hideRandomPhotos="hideHomePhotos" @showRandomPhotos="showHomePhotos" />
  <div class="flex flex-col lg:grid lg:grid-cols-3 lg:gap-8 mx-5 mb-10" v-if="showPhotos">
    <img v-for="photo in randomPhotos" :key="photo.id" :src="photo.urls.small"
      @click="$router.push(`/photo/${photo.id}`)" :alt="photo.alt_description"
      class="image w-full rounded-lg mb-5 lg:mb-0 cursor-pointer aspect-square object-cover" />
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
  .image {
    aspect-ratio: 1 / 1;
  }
</style>