<template>
	<h4 class="text-xl font-bold px-2">LATIHAN SOAL</h4>
	<NavCard root="soal" @filter="p => f(p)" />
	<ArticleList :root="root" title="soal"/>
</template>

<script setup>
const root = ref("soal")
const filtered = ref(false)
const f = (payload) => {
	if (filtered.value == false) {
		root.value = payload
		filtered.value = true
	} else {
		root.value = "soal"
		filtered.value = false
	}
	
}
useHead({
	title: "Latihan Soal - Kelas MIPA",
	meta: [{name: "description", content: "Latihan soal dengan pemabahasan yang detail untuk membantu siswa-siswi SD, SMP, dan SMA belajar"}]
});
</script>
