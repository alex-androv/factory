<template>
  <div class="search h-96 flex items-center justify-center mb-12">
    <div class="relative flex justify-between items-center bg-white px-6 py-5 w-11/12 lg:w-9/12">
      <input type="text" v-model="query" @input="searchPhotos" placeholder="Поиск"
        class="input text-2xl placeholder:text-black w-5/6">
      <img src="@/assets/search.svg">
    </div>
  </div>
  <div class="flex flex-col lg:grid lg:grid-cols-3 lg:gap-8 mx-5 mb-10">
    <img v-for="photo in photos" :key="photo.id" :src="photo.urls.small" @click="$router.push(`/photo/${photo.id}`)"
      :alt="photo.alt_description"
      class="image w-full rounded-lg mb-5 lg:mb-0 cursor-pointer aspect-square object-cover" />
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

<style>
  .search {
    background: url("../assets/bg.jpg") no-repeat;
    background-size: cover;
  }

  .input {
    border: none;
    outline: inherit;
  }
</style>