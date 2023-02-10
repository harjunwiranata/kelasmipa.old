<script setup>
import { useFirebaseStorage, useStorageFileMetadata, useStorageFileUrl } from 'vuefire';
import {ref as storageRef} from 'firebase/storage'


// imageUrl is path inside firebase storage, ex: 'bg-test.jpg'
const props = defineProps(['imageUrl', 'alt'])

const storage = useFirebaseStorage()
const imageRef = storageRef(storage, props.imageUrl || 'placeholder.jpg')
const {url} = useStorageFileUrl(imageRef)
</script>

<template>
<ClientOnly>
<img :src="url" :alt="alt">
</ClientOnly>
</template>
