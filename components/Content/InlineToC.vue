<script setup>
const props = defineProps(['links'])
</script>

<template>
    <ClientOnly>
        <div v-if="$device.isMobileOrTablet" class="w-full p-5 border mx-auto border-sub rounded-md bg-slate-200 dark:bg-slate-600 ">
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
        </div>
    </ClientOnly>
</template>