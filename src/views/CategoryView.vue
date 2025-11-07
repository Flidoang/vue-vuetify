<template>
  <main>
    <h1>Halaman Category</h1>
    <div class="d-flex justify-end my-6">
      <v-btn @click="tambahData()" icon="mdi-plus" size="large" color="primary" />
    </div>
    <DialogComponent v-model="dialog">
      <template #title>
        <div>
          {{ category.isUpdate ? "Update Data" : "Tambah Data" }}
        </div>
      </template>
      <template #content>
        <v-form @submit.prevent="onSubmitData" v-model="form">
          <v-text-field
            :rules="nameRules"
            class="mb-1"
            type=""
            placeholder="Nama"
            label="Name"
            v-model="category.name"
            outlined
          >
          </v-text-field>
          <v-textarea
            :rules="descriptionRules"
            class="mb-1"
            outlined
            placeholder="Description"
            label="Description"
            v-model="category.description"
          >
          </v-textarea>
          <v-btn
            :disabled="!form"
            elevation=""
            color="success"
            block
            large
            type="submit"
            variant="elevated"
            >{{ category.isUpdate ? "Update" : "Tambah" }}</v-btn
          >
        </v-form>
      </template>
    </DialogComponent>

    <!-- show detial data -->
    <DialogComponent v-model="dialogDetail">
      <template #title> {{ category.name }} </template>
      <template #content>
        <p>Description: {{ category.description }}</p>
      </template>
    </DialogComponent>

    <DialogComponent v-model="dialogDelete">
      <template #title>Delete Category</template>
      <template #content>
        <div class="text-h6 text-error pa-3">
          Apakah anda yakin ingin menghapus {{ category.name }}
        </div>
        <v-row>
          <v-col>
            <v-btn color="primary" block @click="destroyData(category.id)">Yakin??</v-btn>
          </v-col>
          <v-col>
            <v-btn color="error" block @click="dialogDelete = false">Batal</v-btn>
          </v-col>
        </v-row>
      </template>
    </DialogComponent>

    <!-- table -->
    <v-table hover>
      <thead>
        <tr>
          <th class="text-left">No</th>
          <th class="text-left">Name</th>
          <th class="text-left">Description</th>
          <th class="text-center">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in categories" :key="item.id">
          <td>{{ index + 1 }}</td>
          <td>{{ item.name }}</td>
          <td>{{ item.description }}</td>
          <td class="text-center">
            <v-btn
              size="x-small"
              color="info"
              icon="mdi-information"
              @click="getData(item)"
            />
            <v-btn
              size="x-small"
              color="primary"
              icon="mdi-pencil"
              class="mx-3"
              @click="editData(item)"
            />
            <v-btn
              size="x-small"
              color="error"
              icon="mdi-trash-can"
              @click="deleteData(item)"
            />
          </td>
        </tr>
      </tbody>
    </v-table>
    <!-- <v-list>
            <v-list-item :to="{ name: 'Category-Name', params:{name:'teknik-informatika'} }">Teknik Informatika</v-list-item>
            <v-list-item :to="{ name: 'Category-Name', params:{name:'sistem-informasi'} }">Sistem Informasi</v-list-item>
            <v-list-item :to="{ name: 'Category-Name', params:{name:'dkv'} }">DKV</v-list-item>
    </v-list> -->
  </main>
</template>

<script setup>
import DialogComponent from "@/components/admin/DialogComponent.vue";
import { onMounted } from "vue";
import { useCategoryStore } from "@/stores/categoryStore";
import { storeToRefs } from "pinia";

// lifecycle
const categoryStorage = useCategoryStore();

// state
const { category, form, dialog, categories, dialogDetail, dialogDelete } = storeToRefs(
  categoryStorage
);

// action
const {
  onSubmitData,
  readCategory,
  getData,
  tambahData,
  editData,
  deleteData,
  destroyData,
} = categoryStorage;

onMounted(() => {
  readCategory();
});

// validation
const nameRules = [
  (value) => {
    if (value) return true;
    return "Name is required";
  },
];

const descriptionRules = [
  (value) => {
    if (value) return true;
    return "description is required";
  },
];
</script>
