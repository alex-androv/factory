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
            downloadPhoto() {
                // Create a link element with the photo download url
                const link = document.createElement("a");
                link.href = this.photo.links.download;
                // link.href = window.URL.createObjectURL(new Blob([response.data]));
                link.download = true;
                // Append the link to the document body and click it
                // link.setAttribute('download', 'image.jpg')
                document.body.appendChild(link);
                link.click();
                // Remove the link from the document body
                document.body.removeChild(link);
            },
            addToFavorites() {
                // Add the photo to the favorites photos array
                const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
                favorites.push(this.photo);
                // Save the favorites photos array to the local storage
                localStorage.setItem("favorites", JSON.stringify(favorites));
            },
        }
    }
</script>