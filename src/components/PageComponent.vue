<template>
  <header class="bg-white shadow">
    <div class="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
      <h1 class="text-3xl font-bold tracking-tight text-gray-900">

        {{ title }}

      </h1>

      <div>
        <slot name="header-slot"></slot>
      </div>

      <!-- <button @click="$emit('increaseBy', 1)">
        Increase by 1
      </button> -->

    </div>
  </header>
  <main>
    <div class="mx-auto text-green-400 max-w-7xl py-6 sm:px-6 lg:px-8">

      <!-- content -->
      <slot></slot>

    </div>
  </main>
</template>
<script setup>

// Props
const props = defineProps({
  title: {
    type: String,
    required: true
  }
})

// Emit
// const emit = defineEmits(['update:title']); // 
// run emit
// emit('update:title', 'New Title');



</script>
<style scoped></style>
