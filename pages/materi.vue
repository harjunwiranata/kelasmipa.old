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
	title: "Materi - Kelas MIPA",
	meta: [{name: "description", content: "Materi sesuai Kurikulum mata pelajaran matematika dan IPA (fisika, kimia, dan biologi) untuk siswa SD, SMP, dan SMA"}]
});
</script>

<template>
	<h4 class="text-xl font-bold px-2">MATERI</h4>
	<NavCard root="materi" @filter="p => {f(p)}" :active-filter="root"/>
	<ArticleList :root="root" title="materi"/>
</template>


