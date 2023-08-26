<template>
    <div>
        <div class="fixed top-0 left-0 w-screen h-16 bg-gray-400 overflow-hidden flex items-center z-50">
            <the-nav-bar />
        </div>
        <div class="mt-16">
            <router-view></router-view>
        </div>
    </div>
</template>
<script setup>
import TheNavBar from '@/components/NavBar/TheNavBar.vue';

</script>
<style setup></style>