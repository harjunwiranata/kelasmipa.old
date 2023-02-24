<template>
	<section class="lg:px-[15%] px-[5%]">
		<Background />
		<h1 class="lg:text-5xl text-2xl leading-normal font-semibold text-center">
			Informasi Seputar Bidang
		</h1>
		<h1 class="lg:text-6xl text-4xl text-center leading-relaxed font-bold rainbow-text">
			Matematika dan IPA
		</h1>
	</section>
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
