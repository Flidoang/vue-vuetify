<template>
    <main>
        <h1>
            Halaman Category
        </h1>
        <v-list>
            <v-list-item :to="{ name: 'Category-Name', params:{name:'teknik-informatika'} }">Teknik Informatika</v-list-item>
            <v-list-item :to="{ name: 'Category-Name', params:{name:'sistem-informasi'} }">Sistem Informasi</v-list-item>
            <v-list-item :to="{ name: 'Category-Name', params:{name:'dkv'} }">DKV</v-list-item>
        </v-list>
    </main>
</template>