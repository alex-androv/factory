<template>
    <div class="photo">
        <div v-if="photo" class="photo-info">
            <img :src="photo.user.profile_image.small" :alt="photo.user.name" />
            <p><strong>User name:</strong> {{ photo.user.name }}</p>
            <p><strong>User link:</strong> <a :href="photo.user.links.html">{{ userLink  }}</a></p>
            <button @click="downloadPhoto">Download</button>
            <button @click="addToFavorites">Add to favorites</button>
        </div>
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
                userLink: "",
            };
        },
        created() {
            this.fetchPhoto();
        },
        computed: {
            isFavorite() {
                const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
                return favorites.some((f) => f.id === this.photo.id);
            },
        },
        methods: {
            async fetchPhoto() {
                try {
                    const response = await axios.get(
                        `https://api.unsplash.com/photos/${this.$route.params.id}?client_id=Af-22R9C5Ra7DroQiRoqVuroD9nPfSiBd98eW8uLQUs`
                    );
                    this.photo = response.data;
                    const userLink = response.data.user.links.html;
                    const userLinkWithoutPrefix = userLink.replace("https://unsplash.com/", "");
                    this.userLink = userLinkWithoutPrefix;

                } catch (error) {
                    console.error(error);
                }
            },
            addToFavorites() {
                const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
                if (!this.isFavorite) {
                    favorites.push(this.photo);
                    localStorage.setItem("favorites", JSON.stringify(favorites));
                }
            },
            downloadPhoto() {
                const link = document.createElement("a");
                link.href = this.photo.links.download;
                link.download = true;
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
            },
        }
    }
</script>