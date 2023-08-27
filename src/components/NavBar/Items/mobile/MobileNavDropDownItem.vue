<template>
    <div class="mobile-container w-full">
        <div :class="isOpen ? 'text-black' : ''"
            class="w-full text-xl text-gray-500 hover:text-black flex flex-col cursor-pointer">
            <div class="w-full flex flex-col justify-between items-center z-40">
                <div @click="isOpen = !isOpen" class="w-full h-auto flex justify-between items-center">
                    <span>{{ props.title }}</span>
                    <i :class="isOpen ? 'rotate-[-180deg]' : ''" class="icon bx bx-chevron-down text-gray-500"></i>

                </div>

            </div>

            <div class="expandable h-full flex flex-col mt-3" v-if="isOpen">
                <div class="h-full flex items-center" v-for="item in items">
                    <div class="vertical-line h-8 w-[2px] bg-gray-100 mr-3"></div>
                    <a :href="item.link" class="text-sm text-gray-400 hover:text-black w-full">{{ item.title }}</a>
                </div>
            </div>
        </div>


    </div>
</template>
<script setup>
import { ref } from 'vue'
let isOpen = ref(false)

const props = defineProps({
    title: {
        type: String,
        required: true
    },
    items: {
        type: Array,
        required: true
    }
})
</script>
<style scoped>
.icon {
    transition: all 0.25s ease-in-out;
}
</style>