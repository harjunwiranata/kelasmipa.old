<template>
	<div class="pt-20">
		<div class="flex w-full justify-between">
			<h4 class="text-xl font-bold px-2">LATIHAN SOAL</h4>
			<NuxtLink class="px-2 text-lg space-x-1 items-center dark:text-primary text-dark flex justify-end" to="/soal">
				<span>Semua latihan soal</span>
				<Icon icon="carbon:chevron-right" class="text-sm" />
			</NuxtLink>
		</div>
		<ArticleList root="soal" title="soal" />
		<NuxtLink class="px-2 text-lg space-x-1 items-center dark:text-primary text-dark flex justify-end" to="/soal">
			<span>Semua soal-soal</span>
			<Icon icon="carbon:chevron-right" class="text-sm" />
		</NuxtLink>
	</div>
</template>

<script setup>
import {Icon} from '@iconify/vue'
</script>
