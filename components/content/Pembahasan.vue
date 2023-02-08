<script setup>

const pembahasan = ref(null)
const toggled = ref(false)
onMounted(() => {
  pembahasan.value.hidden = true
})

const toggle = () => {
  if (pembahasan.value.hidden) {
    pembahasan.value.hidden = false
    toggled.value = true
  } else {
    pembahasan.value.hidden = true
    toggled.value = false
  }
}

</script>

<template>
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
        <span v-if="!toggled">Lihat Pembahasan</span>
        <span v-else>Sembunyikan Pembahasan</span>
      </button>
    </div>
    <div id="pembahasan" ref="pembahasan" hidden>
      <div class="py-4 px-2">
        <slot />
      </div>
    </div>
  </div>
</template>