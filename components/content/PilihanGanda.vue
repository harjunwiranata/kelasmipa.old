<script setup>

const props = defineProps(['grid','jawaban'])
const toggled = ref(false)

const toggle = () => {
  if (toggled.value == false) {
    toggled.value = true
  } else {
    toggled.value = false
  }
}

const kunciA = computed(() => ({"border border-accent rounded":toggled.value && props.jawaban === "A"}))
const kunciB = computed(() => ({"text-2xl":toggled.value && props.jawaban === "B"}))
const kunciC = computed(() => ({"text-2xl":toggled.value && props.jawaban === "C"}))
const kunciD = computed(() => ({"text-2xl":toggled.value && props.jawaban === "D"}))
const kunciE = computed(() => ({"text-2xl":toggled.value && props.jawaban === "E"}))

</script>

<template>
    <ClientOnly>
    <div v-if="grid" class="grid grid-cols-2 gap-2 leading-none align-baseline">
        <span :class="kunciA" class="flex gap-2 px-1">A.<span><slot name="A" /></span></span>
        <span :class="kunciD" class="flex gap-2 px-1">D.<span><slot name="D" /></span></span>
        <span :class="kunciB" class="flex gap-2 px-1">B.<span><slot name="B" /></span></span>
        <span :class="kunciE" class="flex gap-2 px-1">E.<span><slot name="E" /></span></span>
        <span :class="kunciC" class="flex gap-2 px-1">C.<span><slot name="C" /></span></span>
    </div>
    <div v-else>
        <span class="flex gap-2 px-1">A.</span><span><slot name="A" /></span>
        <span class="flex gap-2 px-1">B.</span><span><slot name="B" /></span>
        <span class="flex gap-2 px-1">C.</span><span><slot name="C" /></span>
        <span class="flex gap-2 px-1">D.</span><span><slot name="D" /></span>
        <span class=" flex gap-2 px-1">E.</span><span><slot name="E" /></span>
    </div>
    <div class="
  w-full
        border
        rounded
        border-accent
        mb-2
        flex flex-col hover:border-sub" @click="toggle">
    <div class="text-left cursor-default">
      <button class="
        w-full
        py-4
        px-2
        text-base text-left
        transition
      " type="button">
        <span v-if="!toggled">Lihat Kunci Jawaban</span>
        <span v-else>Sembunyikan Kunci Jawaban</span>
      </button>
    </div>
</div>
</ClientOnly>
</template>
<style scoped>

</style>