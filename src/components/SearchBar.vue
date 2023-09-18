<template>
  <div class="search h-96 flex items-center justify-center mb-12">
    <!-- <div class="flex">
      <input type="text" v-model="query" @input="searchPhotos" placeholder="Поиск" />
      <button type="submit">Search</button>
      <img src="@/assets/search.svg">
    </div> -->
      <!-- <div class="mx-auto"> -->
        <!-- <div class="flex justify-between items-center bg-white"> -->
        <form class="relative flex justify-between items-center bg-white px-6 py-5">
          <input type="text" v-model="query" @input="searchPhotos" placeholder="Поиск" class="input text-2xl placeholder:text-black">
          <button type="submit" class=""><img src="@/assets/search.svg"></button>
        </form>
        <!-- </div> -->
      <!-- </div> -->

  </div>
    <div class="photos flex flex-col sm:flex-row mx-5">
      <img v-for="photo in photos" :key="photo.id" :src="photo.urls.small" @click="$router.push(`/photo/${photo.id}`)"
        :alt="photo.alt_description" class="rounded-lg mb-5 cursor-pointer" />
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
  /* .photos {
    display: flex;
    justify-content: center;
  }

  .photos img {
    width: 50%;
    height: auto;
  } */

  .search {
    background: url("../assets/bg.jpg") no-repeat;
    background-size: cover;
  }
  .input {
    border: none;
    outline: inherit;
  }
</style>