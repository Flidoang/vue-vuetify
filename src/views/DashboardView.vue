<template>
  <main>
    <h1>
      Halaman Dashboard
    </h1>
    <h1>Jumlah User : {{ users.totalUsers }}</h1>
    <div v-for="user in users.userData" :key="user.name">
      <p>Nama: {{ user.name }}</p>
      <p>Email: {{ user.email }}</p>
      <hr />
    </div>
    <hr>
    <form @submit.prevent="onSubmit">
      <label>Nama:</label> <br>
      <input type="text" value="tambah" v-model="users.userInput.name"> <br> <br>
      <!-- {{ users.userInput.name }} <br> -->

      <label>Email:</label> <br>
      <input type="text" value="tambah" v-model="users.userInput.email"> <br> <br>
      <!-- {{ users.userInput.email }} <br> -->

      <input type="submit" value="Tambah User" >
    </form>
  </main>
</template>

<script setup>
import { useUserStore } from '@/stores/UserStorage';

// Storage
const users = useUserStore();

const onSubmit = () => {
  users.addUser();
};
</script>

<style scoped>
input{
  padding: 8px;
  margin-top: 4px;
  border: 1px solid #ccc;
  border-radius: 4px;
}
</style>
