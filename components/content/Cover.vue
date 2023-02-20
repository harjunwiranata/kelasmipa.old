<script setup>
import { useFirebaseStorage, useStorageFileMetadata, useStorageFileUrl } from 'vuefire';
import {ref as storageRef} from 'firebase/storage'



// imageUrl is path inside firebase storage, ex: 'bg-test.jpg'
const props = defineProps(['src', 'alt'])

const storage = useFirebaseStorage()
const imageRef = storageRef(storage, props.src || 'placeholder.jpg')
const {url} = useStorageFileUrl(imageRef)
</script>

<template>
<ClientOnly>
    <div class="rounded-lg border-1">
<img :src="url" :alt="alt || 'gambar ilustrasi'">
    </div>
</ClientOnly>
</template>
