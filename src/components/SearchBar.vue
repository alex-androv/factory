<template>
  <div class="search">
    <form @submit.prevent="searchPhotos">
      <input type="text" v-model="query" placeholder="Enter a keyword" />
      <button type="submit">Search</button>
    </form>
    <div class="photos">
      <img v-if="photo" :src="photo.urls.small" :alt="photo.alt_description" />
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
        photo: null,
      };
    },
    methods: {
      async searchPhotos() {
        try {
          // Get a random photo from unsplash api based on the query
          const response = await axios.get(
            `https://api.unsplash.com/photos/random?query=${this.query}&client_id=Af-22R9C5Ra7DroQiRoqVuroD9nPfSiBd98eW8uLQUs`
          );
          // Set the photo to the response data
          this.photo = response.data;
        } catch (error) {
          // Handle the error
          console.error(error);
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