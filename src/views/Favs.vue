<template>
  <div class="favorites-page">
    <h1>Избранное</h1>
    <div v-if="favorites.length > 0" class="photos">
      <div v-for="photo in favorites" :key="photo.id" class="photo">
        <img :src="photo.urls.small" :alt="photo.alt_description" @click="$router.push(`/photo/${photo.id}`)" />
      </div>
    </div>
    <div v-else>
      <p>Пока ничего не добавлено</p>
    </div>
  </div>
</template>

<script>

  export default {
    name: "Favs",
    data() {
      return {
        favorites: JSON.parse(localStorage.getItem("favorites")) || [],
      };
    },
  };
</script>