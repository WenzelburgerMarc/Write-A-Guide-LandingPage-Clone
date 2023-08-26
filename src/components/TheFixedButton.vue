<template>
    <div class="bg-green-500 w-10 h-10 rounded-full flex justify-center items-center hover:cursor-pointer">
        <i :class="props.icon" class="bx text-white text-2xl"></i>
    </div>
</template>
<script setup>

const props = defineProps({
    icon: {
        type: String,
        default: 'bx-chat',
        required: false,
    },
});

</script>
<style setup></style>