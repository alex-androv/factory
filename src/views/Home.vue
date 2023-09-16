<template>
  <div class="home">
    <SearchBar @hideRandomPhotos="hideHomePhotos" @showRandomPhotos="showHomePhotos" />
    <div class="random-photos" v-if="showPhotos">
      <img v-for="photo in randomPhotos" :key="photo.id" :src="photo.urls.small" @click="$router.push(`/photo/${photo.id}`)" :alt="photo.alt_description" />
    </div>

    <div v-if="selectedPhoto" class="info">
      <h2>Photo Information</h2>
      <p><strong>Id:</strong> {{ selectedPhoto.id }}</p>
      <p><strong>Description:</strong> {{ selectedPhoto.description || "N/A" }}</p>
      <p><strong>Created at:</strong> {{ selectedPhoto.created_at }}</p>
      <p><strong>Updated at:</strong> {{ selectedPhoto.updated_at }}</p>
      <p><strong>Likes:</strong> {{ selectedPhoto.likes }}</p>
      <p><strong>User:</strong> {{ selectedPhoto.user.name }}</p>
      <button @click="closeInfo">Close</button>
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
        selectedPhoto: null,
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
    cursor: pointer;
  }

  .photos img {
    width: 33%;
    height: auto;
    cursor: pointer;
  }
</style>