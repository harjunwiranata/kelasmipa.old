<template>
	<ContentDoc>
		<template #default="{ doc }">
			<div class="max-w-4xl mx-auto">
				<ContentTitle :text="doc.title" />
				<article class="pt-2 relative flex items-start lg:space-x-10 ">
					<div
						class="w-[300px] p-5 sticky top-5 border border-sub rounded-md bg-slate-200 dark:bg-slate-600 hidden lg:block">
						<h2 class="text-sm font-bold mb-4">Daftar Isi</h2>
						<ul class="space-y-2">
							<template v-for="(t, k) in doc.body.toc.links" :key="`toc-item-${k}`">
								<li>
									<NuxtLink :class="{
										'text-sm ml-4': t.depth == 2,
										'text-[13px] ml-6': t.depth > 2,
									}" class="capitalize" :to="`#${t.id}`">{{ t.text }}</NuxtLink>
								</li>
							</template>
						</ul>

					</div>
					<ContentRenderer
						class="prose list-none lg:prose-base prose-sm prose-slate dark:prose-invert blog-link px-2 max-w-screen"
						:value="doc">
					</ContentRenderer>
				</article>
			</div>
		</template>
		<template #empty>
			<h1>Post in empty</h1>
		</template>
		<template #not-found>
			<Error :code="404" wrap />
		</template>
	</ContentDoc>
</template>

<style scoped>
.prose :where(h1):not(:where([class~="not-prose"] *)) {
	display: none;
}

.prose :where(p):not(:where([class~="not-prose"] *)) {
	margin-top: 0;
	margin-bottom: 1.25em;
}
</style>
