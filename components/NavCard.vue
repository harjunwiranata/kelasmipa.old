<script setup>
const props = defineProps({
    activeFilter: String,
    root: String
})


const { data: blogNav } = await useAsyncData("navigation", () => {
    return fetchContentNavigation(queryContent(props.root));
});

</script>

<template>
    <section class="max-w-4xl mx-auto lg:pt-12 pt-6">
        <div class="grid grid-cols-3 lg:grid-cols-6 gap-4">
            <template v-for="(b, i) in blogNav[0]?.children" :key="`blogNavItem-${b._path}-${i}`">
                    <div class="px-6 py-3 cursor-default rounded-lg border-2 border-sub hover:border-accent"
                        @click="$emit('filter', b._path)">
                        <h2 class="text-lg font-semibold rainbow-text">
                            {{ b.title }}
                        </h2>
                        <!-- Loop over files inside the content dir -->
                        <!--ClientOnly>
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
                </ClientOnly-->
                    </div>
            </template>
        </div>
    </section>

</template>

