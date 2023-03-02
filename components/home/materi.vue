<script setup>

import { Icon } from '@iconify/vue'
</script>

<template>
	<div class="pt-20">
		<div class="flex w-full justify-between">
			<h4 class="text-xl font-bold px-2">MATERI</h4>
			<NuxtLink class="px-2 text-lg space-x-1 items-center dark:text-primary text-dark flex justify-end" to="/materi">
				<span>Semua materi</span>
				<Icon icon="carbon:chevron-right" class="text-sm" />
			</NuxtLink>
		</div>
		<ArticleList root="materi" title="materi" />
		<NuxtLink class="px-2 text-lg space-x-1 items-center dark:text-primary text-dark flex justify-end" to="/materi">
			<span>Semua materi</span>
			<Icon icon="carbon:chevron-right" class="text-sm" />
		</NuxtLink>
	</div>
</template>


