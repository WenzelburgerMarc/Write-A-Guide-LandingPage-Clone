<template>
    <div class="info-card-container shadow-md rounded-md w-full xl:w-1/3">
        <div class="inline-flex justify-start items-start p-4">
            <div class="icon-container w-8 h-8 m-0 flex justify-center items-center bg-green-100 rounded-full p-1">
                <i :class="props.icon" class="text-green-500 text-2xl"></i>
            </div>
            <div class="content flex flex-col ml-4  ">
                <h3 class="text-xl mb-1 text-gray-700">{{ props.title }}</h3>
                <p class="text-base font-light text-gray-500">{{ props.description }}</p>

                <div class="flex items-end mt-5">
                    <h1 class="text-5xl">{{ props.improvementForUser[0] }}</h1>
                    <h2 class="text-2xl mx-3"> {{ props.improvementForUser[1] }} </h2>
                    <h2 class=" rounded-3xl py-2 px-3 text-xs text-green-500 bg-green-100">
                        {{
                            props.improvementForUser[2] }}

                    </h2>
                </div>

                <p class="my-3 text-gray-700 text-xs font-semibold">{{ props.improvementText }}</p>

            </div>
        </div>

    </div>
</template>
<script setup>
import { ref } from 'vue';

const props = defineProps({
    title: {
        type: String,
        default: 'Wissenstransfer fördern',
        required: false,
    },
    description: {
        type: String,
        default: 'Sichere Mitarbeiterwissen und mach es zu wertvollem Unternehmenswissen.',
        required: false,
    },
    improvementForUser: {
        type: Array,
        default: () => ['4', 'x', 'Verhindert Wissensverlust'],
    },
    improvementText: {
        type: String,
        default: 'mehr dokumentiertes Wissen',
        required: false,

    },
    icon: {
        type: String,
        default: 'bx bx-check',
        required: false,
    },
});

</script>
<style scoped></style>