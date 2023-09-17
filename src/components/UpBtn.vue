<template>
    <button v-show="isScrolled" @click="scrollToTop">Up</button>
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
        bottom: 20px;
        right: 20px;
    }
</style>