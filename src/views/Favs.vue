<template>
  <div class="mx-5">
    <h1 class="mt-10 mb-14 text-center text-4xl font-bold">Избранное</h1>
    <div v-if="favorites.length > 0">
      <div class="flex flex-col lg:grid lg:grid-cols-3 lg:gap-8 mx-5 mb-10">
        <img v-for="photo in favorites" :key="photo.id" :src="photo.urls.small" :alt="photo.alt_description"
          @click="$router.push(`/photo/${photo.id}`)"
          class="image w-full rounded-lg mb-5 lg:mb-0 cursor-pointer aspect-square object-cover" />
      </div>
    </div>
    <div v-else>
      <p class="text-center">Пока ничего не добавлено</p>
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