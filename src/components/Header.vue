<template>
    <div class="flex justify-between items-center px-5 lg:px-60 py-9 bg-black">
        <router-link to="/"><img src="@/assets/logo.svg" class="lg:w-44 lg:h-16"></router-link>
        <router-link to="/favs">
            <div class="flex">
                <img src="@/assets/favs.svg">
                <p class="hidden lg:inline text-white pl-2">Избранное</p>
            </div>
        </router-link>
    </div>
</template>