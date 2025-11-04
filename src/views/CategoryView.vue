<template>
  <main>
    <h1>Halaman Category</h1>
    <div class="d-flex justify-end my-6">
      <v-btn @click="dialog = true" icon="mdi-plus" size="large" color="primary" />
    </div>
    <DialogComponent v-model="dialog">
      <template #title> Add Kategori </template>
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
            >Add</v-btn
          >
        </v-form>
      </template>
    </DialogComponent>

    <!-- table -->
    <v-table hover>
      <thead>
        <tr>
          <th class="text-left">No</th>
          <th class="text-left">Name</th>
          <th class="text-center">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in categories" :key="item.id">
          <td>{{ index + 1 }}</td>
          <td>{{ item.name }}</td>
          <td class="text-center">
            <v-btn size="x-small" color="info" icon="mdi-information" />
            <v-btn size="x-small" color="primary" icon="mdi-pencil" class="mx-3" />
            <v-btn size="x-small" color="error" icon="mdi-trash-can" />
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
import { ref, reactive, onMounted, onUnmounted, onUpdated } from "vue";

// lifecycle
onMounted(() => {
  console.log("fungsi mounted jalan");
});
onUnmounted(() => {
  console.log("fungsi unmounted jalan");
  confirm("Apakah anda ingin keluar?");
});
onUpdated(() => {
  console.log("fungsi updated jalan");
});

const dialog = ref(false);
const form = ref(false);

const category = reactive({
  name: "",
  description: "",
});

const onSubmitData = () => {
  if (!category.name.trim() || !category.description.trim()) {
    alert("Form belum diisi");
    return;
  }

  alert(
    "Form berhasil disubmit!" +
      "\n" +
      "Data category: " +
      category.name +
      " " +
      category.description
  );

  // Reset form dan tutup dialog
  category.name = "";
  category.description = "";
  dialog.value = false;
};

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

const categories = ref([
  {
    id: 1,
    name: "Teknik Informatika",
  },
  {
    id: 2,
    name: "Sistem Informasi",
  },
  {
    id: 3,
    name: "Desain Komunikasi Visual",
  },
]);
</script>
