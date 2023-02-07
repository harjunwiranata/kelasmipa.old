<script setup>

const jawaban = ref(null)
const toggled = ref(false)
onMounted(() => {
  jawaban.value.hidden = true
})


const toggle = () => {
  if (jawaban.value.hidden) {
    jawaban.value.hidden = false
    toggled.value = true
  } else {
    jawaban.value.hidden = true
    toggled.value = false
  }
}

</script>

<template>
  <div class="
        border
        rounded
        border-accent
        mb-2
        flex flex-col hover:border-sub" @click="toggle">
    <div class="text-left">
      <button class="
        w-full
        py-4
        px-2
        text-base text-left
        transition
      " type="button">
        <span v-if="!toggled">Lihat Jawaban</span>
        <span v-else>Sembunyikan Jawaban</span>
      </button>
    </div>
    <div id="jawaban" ref="jawaban" hidden>
      <div class="py-4 px-2">
        <slot />
      </div>
    </div>
  </div>
</template>