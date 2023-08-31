<template>
    <a :href="link" :class="props.styling"
        class="primary-btn w-auto cursor-pointer rounded-full text-center text-sm font-medium">
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
    },
    styling: {
        type: String,
        required: false,
    }
})

</script>
<style scoped></style>