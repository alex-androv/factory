<template>
  <div class="mx-5">
    <h1 class="mt-10 mb-14 text-center text-4xl font-bold">Избранное</h1>
    <div v-if="favorites.length > 0">
      <div v-for="photo in favorites" :key="photo.id">
        <img :src="photo.urls.small" :alt="photo.alt_description" @click="$router.push(`/photo/${photo.id}`)" class="rounded-lg mb-5 cursor-pointer w-full" />
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