<template>
    <div>
        <Nav />
        <div class="min-h-[calc(100vh-5rem-44px-32px-1rem)]">
            <main class="pt-4 lg:pt-8">
                <slot />
            </main>
        </div>
        <Footer />
    </div>
</template>
