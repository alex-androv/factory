<template>
    <div class="photo">
        <h1>{{ $route.params.id }}</h1>
        <img :src="photo.urls.regular" :alt="photo.alt_description" />
    </div>
</template>

<script>
  import axios from "axios";
    export default {
        name: "PhotoPage",
        data() {
            return {
                photo: null,
            };
        },
        created() {
            console.log(11111);
            this.fetchPhoto();
        },
        methods: {
            async fetchPhoto() {
                try {
                    const response = await axios.get(
                        `https://api.unsplash.com/photos/${this.$route.params.id}?client_id=Af-22R9C5Ra7DroQiRoqVuroD9nPfSiBd98eW8uLQUs`
                    );
                    this.photo = response.data;
                } catch (error) {
                    console.error(error);
                }
            }
        }
    }
</script>