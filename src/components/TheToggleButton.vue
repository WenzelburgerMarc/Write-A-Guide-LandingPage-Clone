<template>
    <div
        class="relative max-w-fit rounded-full inline-flex bg-gray-300 text-md text-gray-500 p-[0.125rem] justify-between items-start">
        <span @click="toggle(false)" :class="!toggleValueRef ? 'bg-white' : ''"
            class="cursor-pointer px-3 py-1 rounded-full w-full h-full">{{ props.firstTitle }}</span>
        <span @click="toggle(true)" :class="toggleValueRef ? 'bg-white' : ''"
            class="cursor-pointer px-3 py-1 rounded-full w-full h-full">{{ props.secondTitle }}</span>
    </div>
</template>
<script setup>
import { ref } from 'vue';
const props = defineProps({
    firstTitle: {
        type: String,
        required: true,
    },
    secondTitle: {
        type: String,
        required: true,
    },
    toggleValue: {
        type: Boolean,
        required: true,
    },
});

let toggleValueRef = ref(props.toggleValue);

const emit = defineEmits(['toggleEvent']);

function toggle(index) {
    toggleValueRef.value = index;

    if (index == 0) {
        emit('toggleEvent', 1);
        return;
    } else {
        emit('toggleEvent', 0);
        return;
    }


}
</script>
<style scoped></style>