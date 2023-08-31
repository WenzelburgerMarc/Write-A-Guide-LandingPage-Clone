<template>
    <div class="radio-button-container group hover:cursor-pointer ">
        <input type="radio" @change="$emit('changeImage')" :id="item.id" class="hidden peer" :name="item.groupName"
            :checked="item.checked" />
        <label :for="item.id"
            class="border-gray-100 group-hover:border-green-500 peer-checked:border-green-500 border-2 shadow-md p-3 rounded-md flex justify-between items-center group-hover:text-green-500 peer-checked:text-green-500 hover:cursor-pointer">
            <span>{{ item.name }}</span><i class='bx bx-right-arrow-alt text-3xl ml-3'></i>
        </label>
    </div>
</template>
<script setup>

const props = defineProps({
    item: {
        type: Object,
        required: true,
    },

});

</script>
<style scoped></style>