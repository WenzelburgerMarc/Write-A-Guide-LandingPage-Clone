<template>
    <a :href="link"
        class="primary-btn w-auto py-1.5 px-5 text-white bg-green-500 hover:bg-green-600 cursor-pointer rounded-full text-center text-sm font-normal">
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