import { name } from '@vue/eslint-config-prettier/skip-formatting'
import { defineStore } from 'pinia'
import { ref, reactive, computed } from 'vue'

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

  const userInput = reactive({
    name: '',
    email: '',
  })

  const clearData = () => {
    userInput.name = ''
    userInput.email = ''
  }

  const addUser = () => {
    userData.value.push({
      name: userInput.name,
      email: userInput.email,
    })
    clearData()
  }

  const totalUsers = computed(() => {
    return userData.value.length
  })

  return { userData, userInput, addUser, totalUsers }
})
