<script setup>
const mode = useColorMode()
onMounted(() => {
	mode.preference = 'dark'
})

</script>
<template>
	<div class="dark:bg-dark dark:text-white min-h-screen bg-white min-h-screen">
		<NuxtLayout>
		<NuxtPage />
		</NuxtLayout>
	</div>
</template>
