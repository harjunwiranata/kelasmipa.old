<script setup>

const props = defineProps(['links'])
const ad = ref()
onMounted(() => {
    const script = document.createElement('script')
    script.type = 'text/javascript'
    script.innerHTML = "atOptions = { 'key' : '00ad00513f5891e4548f78efed608576', 'format' : 'iframe', 'height' : 250, 'width' : 300, 'params' : {} }\;"
    const script2 = document.createElement('script')
    script2.type = 'text/javascript'
    script2.src = "https://www.effectivecreativeformat.com/00ad00513f5891e4548f78efed608576/invoke.js"
    script.appendChild(script2)
    ad.value.appendChild(script)
})
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
            <div ref="ad">
            </div>
        </div>
</template>