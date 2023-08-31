<template>
    <div class="bg-white rounded-md p-8 shadow-md flex flex-col gap-3 justify-start items-start h-full">
        <div class="flex gap-2">
            <h1 class="text-5xl">{{ props.price }}</h1>
            <div class="min-w-32 flex flex-col justify-center items-start">
                <span class="text-gray-500 text-xs">/ Benutzer</span>
                <span class="text-gray-500 text-xs">/ Monat</span>
            </div>
        </div>
        <h1 class="text-4xl">{{ props.title }}</h1>
        <p class="text-sm text-gray-600">{{ props.description }}</p>

        <div class="divider w-full h-[1px] rounded-full bg-gray-100"></div>

        <h2>Top-Funktionen</h2>
        <div class="flex flex-col justify-start items-start text-start gap-3">
            <div class="flex flex-shrink-0 justify-center items-center gap-2" v-for="item in features">
                <i
                    class="bx flex-shrink-0 bx-check text-green-500 bg-green-200 rounded-full text-xl w-8 h-8 text-center flex justify-center items-center"></i>
                <span class="font-light text-xs">{{ item }}</span>
            </div>
        </div>
        <a class="text-green-500 text-sm font-normal cursor-pointer hover:underline" :href="link">Mehr Details</a>
    </div>
</template>
<script setup>
const props = defineProps({
    price: {
        type: String,
        default: '6 €',
        required: false,
    },
    title: {
        type: String,
        default: 'Premium',
        required: false,
    },
    description: {
        type: String,
        default: 'Für kleine Unternehmen',
        required: false,
    },
    features: {
        type: Array,
        default: () => ['Unbegrenzte Guides'],
    },
    link: {
        type: String,
        default: '#'
    }
});


</script>
<style scoped></style>