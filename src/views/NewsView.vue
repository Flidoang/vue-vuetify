<template>
  <section>
    <h1>Halaman News</h1>
    <v-table hover>
      <thead>
        <tr>
          <th>No</th>
          <th>Name</th>
          <th>Deskripsi</th>
          <th>skill</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in categories" :key="item.id">
          <td>{{ index + 1 }}</td>
          <td>{{ item.name }}</td>
          <td>{{ item.description }}</td>
          <td>Anjay</td>
        </tr>
      </tbody>
    </v-table>
  </section>
</template>

<script setup>
import { onMounted } from "vue";
import { useCategoryStore } from "@/stores/categoryStore";
import { storeToRefs } from "pinia";

// lifecycle
const categoryStorage = useCategoryStore();

// state
const { categories } = storeToRefs(categoryStorage);

// action
const { readCategory } = categoryStorage;

onMounted(() => {
  readCategory();
});
</script>
