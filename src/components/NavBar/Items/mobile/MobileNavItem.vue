<template>
    <a :href="link" class="text-xl text-gray-500 hover:text-black">
        {{ props.text }}
    </a>
</template>
<script setup>
const props = defineProps({
    text: {
        type: String,
        required: true
    },
    link: {
        type: String,
        required: true
    }
})
</script>
<style scoped></style>