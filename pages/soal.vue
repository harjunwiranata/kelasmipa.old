<template>
	<section class="lg:px-[15%] px-[5%]\">

		<Background />
		<h1 class="lg:text-5xl text-2xl leading-normal font-semibold text-center">
			Latihan Soal
		</h1>
		<h1 class="lg:text-6xl text-4xl text-center leading-normal font-bold rainbow-text">
			Matematika dan IPA
		</h1>
	</section>
	<NavCard root="soal" @filter="p => f(p)" />
	<ArticleList :root="root" title="soal"/>
</template>

<script setup>
const root = ref("materi")
const filtered = ref(false)
const f = (payload) => {
	if (filtered.value == false) {
		root.value = payload
		filtered.value = true
	} else {
		root.value = "materi"
		filtered.value = false
	}
	
}
useHead({
	title: "Latihan Soal - Kelas MIPA",
});
</script>
