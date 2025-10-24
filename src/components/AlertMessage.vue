<template>
    <v-alert :type="typevalue" variant="tonal" close-label="Close Alert" closable>
        <slot name="title"></slot>
        <slot></slot>
    </v-alert>
</template>

<script setup>
    defineProps({
        typevalue: {
            type: String,
            required: true,
        }
    })
</script>