<template>
    <v-app-bar color="indigo-lighten-3">
        <v-app-bar-nav-icon variant="text" @click.stop="$emit('toggle-drawer')"></v-app-bar-nav-icon>

        <v-toolbar-title>Admin News</v-toolbar-title>

        <template v-if="$vuetify.display.mdAndUp">
            <v-btn icon="mdi-magnify" variant="text"></v-btn>

            <v-btn icon="mdi-filter" variant="text"></v-btn>
        </template>

        <v-btn color="red-darken-3" icon="mdi mdi-logout" variant="text"></v-btn>
    </v-app-bar>
</template>

<script setup>
defineEmits(['toggle-drawer'])
</script>