<template>
  <div class="search">
    <input type="text" v-model="query" @input="searchPhotos" placeholder="Enter a keyword" />
    <button type="submit">Search</button>
    <div class="photos">
      <img v-for="photo in photos" :key="photo.id" :src="photo.urls.small" :alt="photo.alt_description" />
    </div>
  </div>
</template>

<script>
  import axios from "axios";

  export default {
    name: "SearchBar",
    data() {
      return {
        query: "",
        photos: [],
      };
    },
    methods: {
      async searchPhotos() {
        try {
          const response = await axios.get(
            `https://api.unsplash.com/search/photos?query=${this.query}&client_id=Af-22R9C5Ra7DroQiRoqVuroD9nPfSiBd98eW8uLQUs`
          );
          this.photos = response.data.results;
        } catch (error) {
          console.error(error);
        }
        if (this.photos.length > 0) {
          this.$emit("hideRandomPhotos");
        } else if (this.photos.length === 0) {
          this.$emit("showRandomPhotos");
        }
      },
    },
  };
</script>

<style scoped>
  .photos {
    display: flex;
    justify-content: center;
  }

  .photos img {
    width: 50%;
    height: auto;
  }
</style>