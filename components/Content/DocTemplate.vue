

<template>
	<ContentDoc>
		<template #default="{ doc }">
			<div class="px-[3%] lg:px-[15%] mx-auto">
				<ContentTitle :text="doc.title" />
				<article class="pt-2 relative flex items-start lg:space-x-10 ">
					<ContentToC :links="doc.body.toc.links">
					</ContentToC>
					<div class="block">
					<ContentInlineToC :links="doc.body.toc.links"></ContentInlineToC>
					<ContentRenderer
						class="prose text-justify list-none lg:prose-base prose-sm prose-slate dark:prose-invert blog-link px-2 flex-grow"
						:value="doc">
					</ContentRenderer>
					</div>
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
