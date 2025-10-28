<template>
    <div class="d-flex flex-column align-center justify-center">
        <img :src="NotFound" style="width: 40vw;" alt="404 Not Found">
        <p class="text-center">
            Halaman yang Anda cari tidak ditemukan. Kembali ke
        </p>
        <v-btn color="green" class="my-10" :to="{ name: 'Home' }">Back</v-btn>
    </div>
</template>

<script setup>
import NotFound from '../../assets/404.svg';
</script>