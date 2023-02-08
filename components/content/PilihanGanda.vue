<script setup>

const props = defineProps(['grid'])
</script>

<template>
    <div v-if="grid" class="grid grid-cols-2 gap-2">
        <span class="flex gap-2">A.<slot name="A" /></span>
        <span class="flex gap-2">D.<slot name="D" /></span>
        <span class="flex gap-2">B.<slot name="B" /></span>
        <span class="flex gap-2">E.<slot name="E" /></span>
        <span class="flex gap-2">C.<slot name="C" /></span>
    </div>
    <div v-else>
        <span class="flex gap-2">A.<slot name="A" /></span>
        <span class="flex gap-2">B.<slot name="B" /></span>
        <span class="flex gap-2">C.<slot name="C" /></span>
        <span class="flex gap-2">D.<slot name="D" /></span>
        <span class="flex gap-2">E.<slot name="E" /></span>
    </div>
</template>