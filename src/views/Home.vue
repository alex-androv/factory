<template>
  <div class="home">
    <SearchBar />
    <div class="random-photos">
      <img v-for="photo in photos" :key="photo.id" :src="photo.urls.small" :alt="photo.alt_description" />
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
        photos: [],
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
          this.photos = response.data;
        } catch (error) {
          console.error(error);
        }
      },
    },
  }
</script>

<style>
.photos {
display: flex;
flex-wrap: wrap;
}

.photos img {
width: 33%;
height: auto;
}
</style>