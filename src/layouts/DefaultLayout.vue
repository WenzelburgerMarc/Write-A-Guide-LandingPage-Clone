<template>
    <div>
        <div :class="isOnTop ? '' : 'shadow'"
            class="navbar fixed top-0 left-0 w-screen h-16 bg-white flex items-center overflow-hidden">
            <the-nav-bar />
        </div>
        <div class="mt-16">
            <router-view></router-view>
        </div>
    </div>
</template>
<script setup>
import { ref, onBeforeUnmount } from 'vue';
import TheNavBar from '@/components/NavBar/TheNavBar.vue';

let isOnTop = ref(true);

let scrollListener = window.addEventListener('scroll', () => {
    if (window.scrollY > 0) {
        isOnTop.value = false;
    } else {
        isOnTop.value = true;
    }
});



onBeforeUnmount(() => {
    scrollListener.removeEventListener();
});

</script>
<style setup>
.navbar {
    z-index: 1000;
}
</style>