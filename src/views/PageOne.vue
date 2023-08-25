<template>
    <page-component title="Page One">
        Dies ist Page 1
        <p>{{ demoData }}</p>

        <br>
        <button @click="updateDemoData" class="text-blue-200 underline">Update Demo Data</button>

        <br>
        <router-link :to="{ name: 'page2' }" class="text-blue-200 underline">To Page 2</router-link>
    </page-component>
</template>

<script setup>
import { ref, computed } from 'vue';
import PageComponent from '@/components/PageComponent.vue';

// Store
import { useStore } from 'vuex';
const store = useStore();

const demoData = computed(() => store.getters['demo/getDemoData']); // Computed is used to update the value automatically when the store changes

const updateDemoData = () => {
    store.dispatch('demo/setDemoData', 'Updated Demo Data'); // Action (async)
    store.commit('demo/SET_DEMO_DATA', 'Updated Demo Data2'); // Mutation (sync)
    store.state.demo.demoData = 'Updated Demo Data3'; // Directly change the state (not recommended)
};

// Router
import { useRouter } from 'vue-router';
const router = useRouter();
</script>

<style scoped></style>
