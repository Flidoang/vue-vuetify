<template>
  <v-footer class="bg-blue-grey-lighten-1">
    <v-row justify="center" no-gutters>
      <v-col class="text-center mt-2" cols="12">
        {{
          new Date().toLocaleDateString("id-ID", {
            day: "numeric",
            month: "long",
            year: "numeric",
          })
        }}
        - <strong>Rafli Hendarsyah</strong>
      </v-col>
    </v-row>
  </v-footer>
</template>
