<template>
  <main>
    <h1>
      Halaman Dashboard
    </h1>
    <div v-for="user in users.userData" :key="user.name">
      <p>Nama: {{ user.name }}</p>
      <p>Email: {{ user.email }}</p>
      <hr />
    </div>
  </main>
</template>

<script setup>
import { useUserStore } from '@/stores/UserStorage';

// Storage
const users = useUserStore();
</script>
