<template>
    <button v-show="isScrolled" @click="scrollToTop">
        <div class="flex justify-center items-center w-12 h-12 border rounded-lg shadow-lg shadow-gray-400  ">
            <img src="@/assets/up.svg" >
        </div>
    </button>
</template>

<script>
    export default {
        name: "App",
        data() {
            return {
                isScrolled: false,
            };
        },
        mounted() {
            window.addEventListener("scroll", this.handleScroll);
        },
        beforeDestroy() {
            window.removeEventListener("scroll", this.handleScroll);
        },
        methods: {
            handleScroll() {
                this.isScrolled = window.scrollY > 500;
            },
            scrollToTop() {
                window.scrollTo({
                    top: 0,
                    behavior: "smooth"
                });
            },
        },
    };
</script>

<style scoped>
    button {
        position: fixed;
        bottom: 40px;
        right: 40px;
    }
</style>