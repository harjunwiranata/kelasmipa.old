<script setup>

const props = defineProps(['root', 'title'])

</script>

<template>
    <ContentList v-slot="{ list }" :path="root">
      <h1 class="px-2 lg:px-0 text-xl font-bold mb-3">{{ title }}</h1>
        <section v-for="article in list" :key="article._path" class="px-2 lg:px-0">
          <div
            class="flex max-w-4xl mx-auto mb-3 hover:no-underline p-6 space-x-6 rounded border border-primary-300"
          >
            <div class="mt-1 text-slate-600 dark:text-gray-400 text-right">
              <a
                class="text-sm flex items-center justify-end space-x-1"
                :href="`https://www.twitter.com/${article.author}`"
              >
                <Icon icon="carbon:logo-twitter" class="text-xs" />
                <span>{{ article.author }}</span>
            </a>
              <div class="grid grid-cols-2 mt-2 text-center">
              <div class="text-xs" v-for="tag in article.tags" :key="tag">{{ tag }}</div>
              </div>
            </div>
            <div class="flex flex-col">
              <div
                class="text-xl font-semibold text-slate-800 dark:text-gray-50"
              >
                {{ article.title }}
              </div>
              <div class="text-slate-700 dark:text-gray-300 mb-1">
                {{ article.description }}
              </div>
              <div class="flex">
                <Anchor
                  class="text-sm flex space-x-1 items-center text-primary-500"
                  :to="article._path"
                >
                  <span>baca lebih lanjut</span>
                  <icon:ic:baseline-arrow-right-alt class="text-sm" />
                </Anchor>
              </div>
            </div>
          </div>
        </section>
      </ContentList>
</template>