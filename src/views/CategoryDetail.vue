<template>
    <main>
        <h1>
            Halaman Category Detail {{ categoryName }}
        </h1>
        <v-btn @click="BackCategory" class="my-3">Back</v-btn>
    </main>
</template>

<script setup>
import { useRouter, useRoute } from 'vue-router'
import { computed } from 'vue'

const router = useRouter()
const route = useRoute()

const categoryName = computed(() => {
    const name = route.params.name

    // Mapping slug ke nama lengkap
    const categories = {
        'teknik-informatika': 'Teknik Informatika',
        'sistem-informasi': 'Sistem Informasi',
        'dkv': 'Desain Komunikasi Visual'
    }

    return categories[name] || name
})

function BackCategory() {
    router.push({ name: 'Category' })
}
</script>