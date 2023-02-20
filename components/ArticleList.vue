<script setup>

import { Icon } from "@iconify/vue";
const props = defineProps(['root', 'title', 'filter'])

</script>

<template>
  <div class="max-w-4xl mx-auto">
    <ContentList v-slot="{ list }" :path="root">
      <div class="flex flex-col justify-between md:flex-row px-2 lg:px-0 mb-3 lg:ml-2">
        <h1 class=" text-2xl font-bold hidden">{{ title }}</h1>
      </div>
      <section v-for="article in list" :key="article._path" class="px-2 lg:px-0">
        <NuxtLink :to="article._path">
          <div
            class="flex mb-3 cursor-default hover:no-underline w-full p-2 md:p-4 lg:p-6 lg:space-x-6 rounded-lg border-2 border-sub hover:border-accent">
            <div class="min-w-[150px] hidden md:flex">
              <img src="/icon.png" class="p-2 m-auto object-contain">
            </div>
            <div class="flex flex-col">
              <div class="text-xl font-semibold text-slate-800 dark:text-gray-50">
                {{ article.title }}
              </div>
              <div class="text-slate-700 dark:text-gray-300 mb-1">
                {{ article.description }}
              </div>
              <div class="flex text-right justify-between">
                <a class="text-sm flex items-center justify-end space-x-1"
                  :href="`https://www.twitter.com/${article.author}`">
                  <Icon icon="carbon:logo-twitter" />
                  <span>{{ article.author ? article.author : "kelasmipa" }}</span>
                </a>
                <NuxtLink class="text-sm space-x-1 items-center dark:text-accent text-dark flex" :to="article._path">
                  <span>Baca lebih lanjut</span>
                  <Icon icon="carbon:chevron-right" class="text-sm" />
                </NuxtLink>
              </div>
            </div>
          </div>
        </NuxtLink>
      </section>
    </ContentList>
  </div>
</template>
