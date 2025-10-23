<template>
  <v-layout>

    <!-- Sidebar -->
    <SideBar v-model="drawer" />

    <!-- Navbar -->
    <v-app-bar color="indigo-lighten-3">
      <v-app-bar-nav-icon variant="text" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>Admin News</v-toolbar-title>

      <template v-if="$vuetify.display.mdAndUp">
        <v-btn icon="mdi-magnify" variant="text"></v-btn>

        <v-btn icon="mdi-filter" variant="text"></v-btn>
      </template>

      <v-btn color="red-darken-3" icon="mdi mdi-logout" variant="text"></v-btn>
    </v-app-bar>



    <!-- Main -->
    <v-main style="height: 500px">
      <v-card-text>
        <h1>Ini main Content</h1>
      </v-card-text>
    </v-main>
  </v-layout>
</template>

<script setup>
import { ref, watch } from 'vue'
import SideBar from './components/SideBar.vue'

const drawer = ref(false)
const group = ref(null)

watch(group, () => {
  drawer.value = false
})
</script>