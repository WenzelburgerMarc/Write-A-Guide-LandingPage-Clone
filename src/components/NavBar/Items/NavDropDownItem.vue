<template>
    <div @mouseenter="isOpen = true" @mouseleave="isOpen = false"
        class="relative h-full text-sm font-medium text-gray-500 hover:text-black cursor-pointer">
        <div class="flex justify-center items-center gap-0 h-full">
            <span>
                {{ props.title }}
            </span>
            <i :class="isOpen ? 'rotate-[-180deg]' : ''" class="icon bx bx-chevron-down text-xl"></i>
        </div>
        <div :class="isOpen ? '' : 'hidden'"
            class="min-w-max nav-dropdown bg-white absolute flex flex-col top-full right-0 shadow-md p-5 rounded-md">

            <a v-for="item in props.items" :href="item.link" class="flex hover:bg-green-50 rounded-md p-3">
                <div class="flex h-10 w-10 justify-center items-center mr-3 bg-green-200 p-2 rounded-full">
                    <i :class="item.icon" class="icon bx text-xl text-green-700"></i>
                </div>
                <div class="flex flex-col">
                    <span class="text-sm font-medium text-gray-500 ">
                        {{ item.title }}
                    </span>
                    <span class="text-sm  text-gray-400">
                        {{ item.description }}
                    </span>
                </div>

            </a>

        </div>
    </div>
</template>
<script setup>
import { ref } from 'vue';
let isOpen = ref(false);

const props = defineProps({
    title: {
        type: String,
        required: true
    },
    items: {
        type: Array,
        required: true
    }
});
</script>
<style scoped>
.icon {
    transition: all 0.25s ease-in-out;
}
</style>