<template>
	<header class="flex items-center justify-between h-20 px-[3%] lg:px-[15%] sticky top-0 z-30 dark:bg-dark bg-white">
		<NuxtLink to="/" class="font-bold text-2xl lg:text-4xl">
			Kelas <span class="text-primary">MIPA</span>
		</NuxtLink>
		<nav class="flex items-center space-x-7 text-dark dark:text-white">
			<template v-for="(n, i) in links" :key="`navLink-${i}`">
				<NuxtLink :to="n.link" class="inline-block nav-link hover:text-accent group">
					<div class="flex items-center space-x-2">
						<Icon :icon="n.icon" class="w-6 h-6" />
						<span class="font-medium max-sm:hidden"> {{ n.name }}</span>
					</div>
					<div
						class="h-0.5 w-full bg-accent mt-1 -translate-y-full scale-0 group-hover:scale-100 group-hover:translate-y-full transition-all">
					</div>
				</NuxtLink>
			</template>
			<button @click="changeMode" class="inline-block nav-link hover:text-primary group">
				<Icon v-if="mode.preference == 'dark'" icon="carbon:sun" class="w-6 h-6" />
				<Icon v-else icon="carbon:moon" class="w-6 h-6" />
				<div
					class="h-0.5 w-full bg-primary mt-1 -translate-y-full scale-0 group-hover:scale-100 group-hover:translate-y-full transition-all">
				</div>
			</button>

		</nav>
	</header>
</template>

<script setup>
import { Icon } from "@iconify/vue";
const links = [
	{
		name: "Blog",
		icon: "carbon:blog",
		link: "#blog",
	},
	{
		name: "Materi",
		icon: "carbon:book",
		link: "#materi",
	},
	{
		name: "Soal",
		icon: "carbon:calculation",
		link: "#soal",
	},
];
const mode = useColorMode()

const changeMode = () => {
	mode.preference == 'dark' ? mode.preference = 'light' : mode.preference = 'dark'
}

</script>


