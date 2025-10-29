import { name } from '@vue/eslint-config-prettier/skip-formatting'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useUserStore = defineStore('User', () => {
  const userData = ref([
    {
      name: 'Rafli Hendarsyah',
      email: 'rafli@gmail.com',
    },
    {
      name: 'Puja Rochmansyah',
      email: 'puja@gmail.com',
    },
  ])
  return { userData }
})
