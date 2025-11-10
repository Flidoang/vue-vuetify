<template>
  <section>
    <FormAuthComponent :isLogin="isLogin" />
  </section>
</template>

<script setup>
import FormAuthComponent from "@/components/public/FormAuthComponent.vue";

const isLogin = true;
</script>
