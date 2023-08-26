<template>
    <section class="vertical-image-section w-screen min-h-screen overflow-y-auto overflow-x-hidden">

        <div class="flex flex-col justify-center items-center w-full ">
            <div class="top-container w-full lg:w-1/2 flex-grow p-4 lg:p-8 lg:text-center">
                <span class="uppercase text-green-500 text-sm sm:text-sm mb-3 inline-block">{{ sectionTitle }}</span>
                <h2 class=" w-auto tracking-wider text-3xl"><span class="relative"><span
                            class="highlighter absolute left-[-0.25rem] top-4 w-[calc(100%+0.5rem)] h-3/4 rounded-full bg-green-500 opacity-10 -z-10"></span>{{
                                titleMarked }}</span>{{ title }}</h2>
                <p class="text-xl font-light text-gray-700 mt-5">{{ description }}</p>

            </div>

            <div class="bottom-container h-full flex justify-start items-center">
                <img :src="imageSRC" class="h-full rounded-xl bg-cover mr-auto md:max-w-3xl" />
            </div>
        </div>


    </section>
</template>

<script setup>

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
    imageSRC: {
        type: String,
        required: true,
    },
});


</script>

<style scoped></style>
