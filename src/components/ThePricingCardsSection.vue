<template>
    <section class="pricing-cards-section relative bg-transparent">
        <div class="absolute top-0 left-0 w-full h-full bg-gray-100 -skew-y-6 -z-10"></div>
        <div class="top-container w-full md:w-1/2 lg:w-2/3 p-4 lg:p-8 mt-12 md:text-center">
            <span class="uppercase text-green-500 text-sm sm:text-sm mb-3 inline-block">{{ sectionTitle }}</span>
            <h2 class="w-auto tracking-wider text-3xl"><span class="relative"><span
                        class="highlighter absolute left-[-0.25rem] top-4 w-[calc(100%+0.5rem)] h-3/4 rounded-full bg-green-500 opacity-10 -z-10"></span>{{
                            titleMarked }}</span>{{ title }}</h2>
            <p class="text-xl font-light text-gray-700 mt-5 mx-auto">{{ description }}</p>

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

});

</script>
<style scoped></style>