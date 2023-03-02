<template>
	<h4 class="text-xl font-bold px-2">BLOG</h4>
	<NavCard root="blog" @filter="p => f(p)"></NavCard>
	<ArticleList :root="root" title="blog"/>
</template>

<script setup>
const root = ref("blog")
const filtered = ref(false)
const f = (payload) => {
	if (filtered.value == false) {
		root.value = payload
		filtered.value = true
	} else {
		root.value = "blog"
		filtered.value = false
	}
	
}

useHead({
	title: "Kelas MIPA",
	meta: [{name: "description", content: "Kelas MIPA, berbagi informasi, materi dan bersama berlatih soal dengan pemabahasan yang detail untuk membantu siswa-siswi belajar"}]
});
</script>
