<template>
    <a :href="link"
        class="primary-btn w-auto py-3 px-5 text-green-500 border-2 border-green-500 hover:border-green-600 hover:text-green-600 cursor-pointer rounded-full text-center text-sm font-normal">
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