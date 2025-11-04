<template>
    <div>
        <h1>Halaman Profile</h1>
        <h3>Jumlah user {{ users.totalUsers }}</h3>

        <IconLink color="blue" icon="mdi-linkedin" link="https://www.linkedin.com/in/raflihendarsyah/" />
        <IconLink color="grey" icon="mdi-github" link="https://github.com/Flidoang" />
        <IconLink color="red" icon="mdi-instagram" link="https://www.instagram.com/fli_rafli22/" />

        <v-divider></v-divider>
        <div v-for="user in users.userData" :key="user.name">
            <p>Nama: {{ user.name }}</p>
            <p>Email: {{ user.email }}</p>
            <hr />
        </div>
    </div>
</template>

<script setup>
import IconLink from "@/components/IconLink.vue";
import { useUserStore } from "@/stores/UserStorage";

// Storage
const users = useUserStore();
</script>
