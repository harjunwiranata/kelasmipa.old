

<template>
	<ContentDoc>
		<template #default="{ doc }">
			<div class="px-[3%] lg:px-[15%] mx-auto">
				<ContentTitle :text="doc.title" />
				<article class="pt-2 relative flex items-start lg:space-x-10 ">
					<div
						class="w-[300px] p-5 sticky top-5 border border-sub rounded-md bg-slate-200 dark:bg-slate-600 hidden lg:block">
						<p class="text-sm font-bold mb-3">Daftar Isi</p>
						<ul class="space-y-1">
							<template v-for="(t, k) in doc.body.toc.links" :key="`toc-item-${k}`">
								<li>
									<NuxtLink class="capitalize text-sm" :to="`#${t.id}`">{{ t.text }}</NuxtLink>
								</li>
								<li v-if="t.children">
									<NuxtLink v-for="c in t.children" class="text-[13px] ml-4 capitalize" :to="`#${c.id}`">
										{{ c.text }}
									</NuxtLink>
								</li>
							</template>
						</ul>
						<Adsbygoogle />
					</div>
					<ContentRenderer
						class="prose list-none lg:prose-base prose-sm prose-slate dark:prose-invert blog-link px-2 flex-grow"
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
