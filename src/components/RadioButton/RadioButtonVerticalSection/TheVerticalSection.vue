<template>
    <section class="vertical-section w-screen overflow-y-auto overflow-x-hidden">

        <div class="flex flex-col justify-center items-center w-full ">
            <div class="top-container w-full lg:w-1/2 flex-grow  lg:text-center">
                <span class="uppercase text-green-500 text-sm sm:text-sm mb-3 inline-block">{{ sectionTitle }}</span>
                <h2 class=" w-auto tracking-wider text-3xl"><span class="relative"><span
                            class="highlighter absolute left-[-0.25rem] top-4 w-[calc(100%+0.5rem)] h-3/4 rounded-full bg-green-500 opacity-10 -z-10"></span>{{
                                titleMarked }}</span>{{ title }}</h2>
                <p class="text-xl font-light text-gray-700 mt-5">{{ description }}</p>

                <div
                    class="selection-btn-list-container w-full mt-6 mb-24 lg:flex lg:justify-center lg:items-center lg:space-x-8">
                    <the-radio-button v-on:changeImage="changeImage(item.id)" class="mt-5" :item="item"
                        v-for="item in props.items" :key="item.id" />

                </div>

            </div>

            <div class="bottom-container h-full flex justify-start items-center ">
                <img :src="selectedImage" class="h-full rounded-xl bg-cover shadow-md mr-auto" />
            </div>
        </div>


    </section>
</template>

<script setup>
import { ref, onBeforeMount } from 'vue';
import TheRadioButton from '@/components/RadioButton/TheRadioButton.vue';

const props = defineProps({
    sectionTitle: {
        type: String,
        required: true,
    },
    titleMarked: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    items: {
        type: Array,
        required: true,
    },
});

let selectedImage;

onBeforeMount(() => {
    selectedImage = ref(props.items[0].image);
});

function changeImage(id) {
    selectedImage.value = props.items.find((item) => item.id === id).image;
}
</script>

<style scoped></style>
