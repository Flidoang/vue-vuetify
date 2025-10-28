<template>
  <v-layout>

    <!-- Sidebar -->
    <SideBar v-model="drawer" />

    <!-- Navbar -->
    <NavBar @toggle-drawer="toggleDrawer" />

    <!-- Main -->
    <v-main style="height: 500px">
      <v-card-text>
        <RouterView />
      </v-card-text>
    </v-main>
  </v-layout>
</template>

<script setup>
import { ref, provide } from 'vue'
import { RouterView } from 'vue-router'
import SideBar from '@/components/SideBar.vue'
import NavBar from '@/components/NavBar.vue'
// import AlertMessage from './components/AlertMessage.vue'

const drawer = ref(true)
// const showError = ref(false)
// const showMotivation = ref(false)

provide('username', 'Flixiver')

const toggleDrawer = () => {
  drawer.value = !drawer.value
}

</script>