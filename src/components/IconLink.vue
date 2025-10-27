<template>
    <v-btn :color="color" :icon="icon" class="ma-2" :href="link" target="#"></v-btn>
</template>

<script setup>
defineProps({
    color: {
        type: String,
        required: true,
    },
    icon: {
        type: String,
        required: true,
    },
    link: {
        type: String,
        required: true,
    }
})
</script>