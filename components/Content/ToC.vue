<script setup>
const props = defineProps(['links'])
</script>

<template>
        <div v-if="$device.isDesktop" class="w-[300px] p-5 sticky top-5 border border-sub rounded-md bg-slate-200 dark:bg-slate-600 hidden lg:block">
            <p class="text-sm font-bold mb-3">Daftar Isi</p>
            <ul class="space-y-1">
                <template v-for="(t, k) in links" :key="`toc-item-${k}`">
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
            <LazyAdsbygoogle />
        </div>
</template>