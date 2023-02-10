<script setup>

const props = defineProps({
    title: String,
    root: String
})

const { data: blogNav } = await useAsyncData("navigation", () => {
    return fetchContentNavigation(queryContent(props.root));
});

</script>

<template>
    <section class="lg:px-[15%] px-[5%] lg:pt-12 pt-6">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">

            <template v-for="(b, i) in blogNav[0]?.children" :key="`blogNavItem-${b._path}-${i}`">
                <ClientOnly>
                    <NuxtLink class="px-8 py-4 cursor-default rounded-lg border-2 border-sub hover:border-accent"
                        :to="b._path">
                        <h2 class="text-lg font-semibold rainbow-text">
                            {{ b.title }}
                        </h2>
                        <!-- Loop over files inside the content dir -->
                        <ul v-if="b.children" class="list-disc list-inside mt-4 pl-2 space-y-3" :id="b.children">
                            <template v-for="(child, k) in b.children" :key="`childNav-${child._path}-${k}-${i}`">
                                <li class="list-none text-base hover:text-primary transition-all">
                                    <NuxtLink :to="`${child._path}`">
                                        {{ child.title }}
                                    </NuxtLink>
                                </li>
                            </template>
                            <li class="list-none text-base hover:text-primary transition-all float-right text-accent">
                                <NuxtLink :to="b._path" class=" text-bold">
                                    Lebih banyak >>
                                </NuxtLink>
                            </li>
                        </ul>

                    </NuxtLink>
                </ClientOnly>
            </template>
        </div>
    </section>

</template>

