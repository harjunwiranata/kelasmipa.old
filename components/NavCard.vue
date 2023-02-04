<script setup>

const props = defineProps({
    title: String,
    root: String,
    col: String
})

const column = ref(`lg:grid-cols-${props.col}`)
const { data: blogNav } = await useAsyncData("navigation", () => {
		return fetchContentNavigation(queryContent(props.root));
	});</script>

<template>
<section class="lg:px-[15%] px-[5%] lg:pt-16 pt-8">
    <p
        class="text-center uppercase font-medium tracking-wider mb-10"
    >
        {{title}}
    </p>
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-5 {{ column }}" :class="column">
        <template
            v-for="(b, i) in blogNav[0].children"
            :key="`blogNavItem-${b._path}-${i}`"
        >
            <div class="px-7 py-5 rounded-lg border-2">
                <h2 class="text-lg font-semibold rainbow-text">
                    {{ b.title }}
                </h2>
                <!-- Loop over files inside the content dir -->
                <ul
                    v-if="b.children"
                    class="list-disc list-inside mt-4 pl-2 space-y-3"
                >
                    <template
                        v-for="(child, k) in b.children"
                        :key="`childNav-${child._path}-${k}-${i}`"
                    >
                        <li
                            class="list-none text-base hover:text-primary-900 transition-all"
                        >
                            <NuxtLink :to="`${child._path}`">
                                {{ child.title }}
                            </NuxtLink>
                        </li>
                    </template>
                        <li class="list-none text-base hover:text-primary-900 transition-all float-right">
                            <NuxtLink :to="b._path">
                                Lebih banyak >>
                            </NuxtLink>
                        </li>
                </ul>
                <ul v-else class="list-disc list-inside mt-4 pl-2 space-y-3">
                    <li
                        class="list-item text-base text-amber-400 hover:text-primary-900 transition-all"
                    >
                        <NuxtLink :to="`/${root}/${b._path}`"> Get Started </NuxtLink>
                    </li>
                </ul>
            </div>
        </template>
    </div>
</section>

</template>

