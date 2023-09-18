<template>
    <div class="px-5 lg:px-60 mb-10">
        <div v-if="photo" class="mb-8 mt-10 flex justify-between">
            <div class="flex items-center">
                <img :src="photo.user.profile_image.small" :alt="photo.user.name" class="w-12 h-12 rounded-lg mr-3" />
                <div class="flex flex-col justify-center">
                    <p class="text-lg leading-4">{{ photo.user.name }}</p>
                    <p class="text-sm text-gray-400 cursor-pointer"><a :href="photo.user.links.html">{{ userLink  }}</a>
                    </p>
                </div>
            </div>
            <div class="">
                <button @click="addToFavorites">
                    <div
                        class="flex justify-center items-center w-10 h-10 border rounded-lg shadow-lg shadow-gray-400 mr-4">
                        <img src="@/assets/favs_blk.svg"></div>
                </button>
                <button @click="downloadPhoto">
                    <div
                        class="flex justify-center items-center w-10 h-10 border rounded-lg shadow-lg shadow-gray-400 bg-yellow-300">
                        <img src="@/assets/dwnld.svg"></div>
                </button>
            </div>
        </div>
        <img :src="photo.urls.regular" :alt="photo.alt_description" class="rounded-lg lg:mx-auto" />
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