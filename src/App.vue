<template>
  <v-layout>

    <!-- Sidebar -->
    <SideBar v-model="drawer" />

    <!-- Navbar -->
    <NavBar @toggle-drawer="toggleDrawer" />

    <!-- Main -->
    <v-main style="height: 500px">
      <v-card-text>
        <h1>Ini main Content</h1>
        <v-btn @click="showMotivation = !showMotivation" type="button">Show Motivation</v-btn>
        <v-btn @click="showError = !showError" type="button">Show Error</v-btn>
        <AlertMessage v-model="showMotivation" typevalue="success">
          <template #title>
            <span class="text-h5">List Motivation</span>
          </template>
          <template #default>
            <ul>
              <li>Rafli Hendarsyah</li>
              <li>Puja Rochmansyah</li>
              <li>Jhon Doe</li>
            </ul>
          </template>
        </AlertMessage>
        <AlertMessage v-model="showError" typevalue="error">
          <template #title>
            <span class="text-h5">Error</span>
          </template>
          <template #default>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae nemo sint maiores vero blanditiis,
              officia numquam rerum sit quisquam laborum.</p>
          </template>
        </AlertMessage>
      </v-card-text>
    </v-main>
  </v-layout>
</template>

<script setup>
import { ref, provide } from 'vue'
import SideBar from './components/SideBar.vue'
import NavBar from './components/NavBar.vue'
import AlertMessage from './components/AlertMessage.vue'

const drawer = ref(false)
const showError = ref(false)
const showMotivation = ref(false)

provide('username', 'Flixiver')

const toggleDrawer = () => {
  drawer.value = !drawer.value
}

</script>