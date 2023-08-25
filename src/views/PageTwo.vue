<template>
    <page-component title="Page Two">
        <template v-slot:header-slot>
            <span class="bg-red-400">dies ist der header-slot</span>
        </template>

        Dies ist Page 2
        <br>
        <router-link :to="{ name: 'Page1' }" class="text-blue-200 underline"> To Page 1</router-link>

    </page-component>
</template>
<script setup>
import PageComponent from '@/components/PageComponent.vue';

</script>
<style scoped></style>