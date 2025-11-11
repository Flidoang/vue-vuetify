import { auth } from '@/config/firebase'
import { defineStore } from 'pinia'
import { reactive, ref } from 'vue'
import { createUserWithEmailAndPassword } from 'firebase/auth'

export const useAuthStore = defineStore('auth', () => {
  const formInput = ref(false)

  const user = reactive({
    name: '',
    email: '',
    password: '',
  })

  const authUser = async () => {
    const reggister = await createUserWithEmailAndPassword(auth, user.email, user.password)
    alert('Registrasi Berhasil')
    console.log(reggister)
  }

  return {
    formInput,
    user,
    authUser,
  }
})
