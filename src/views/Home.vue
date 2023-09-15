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
          // Get 9 random photos from unsplash api
          const response = await axios.get(
            "https://api.unsplash.com/photos/random?count=9&client_id=YOUR_ACCESS_KEY"
          );
          // Set the photos array to the response data
          this.photos = response.data;
        } catch (error) {
          // Handle the error
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