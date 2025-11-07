import { defineStore } from 'pinia'
import { ref } from 'vue'
import { addDoc, collection, getDocs, doc, updateDoc, deleteDoc } from 'firebase/firestore'
import { db } from '../config/firebase'

export const useCategoryStore = defineStore('category', () => {
  const categoryCollection = collection(db, 'categories')

  const dialog = ref(false)
  const dialogDetail = ref(false)
  const dialogDelete = ref(false)
  const form = ref(false)

  const category = ref({
    id: '',
    name: '',
    description: '',
    isUpdate: false,
  })

  const clearData = () => {
    category.value = {
      id: '',
      name: '',
      description: '',
      isUpdate: false,
    }
  }

  const categories = ref([])

  const onSubmitData = async () => {
    if (!form.value) return

    try {
      if (category.value.isUpdate) {
        // Update existing document
        await updateDoc(doc(categoryCollection, category.value.id), {
          name: category.value.name,
          description: category.value.description,
        })
        alert('Data berhasil diupdate!')
      } else {
        await addDoc(categoryCollection, {
          name: category.value.name,
          description: category.value.description,
        })
        alert('Data berhasil disimpan!')
      }

      clearData()
      dialog.value = false
      await readCategory()
    } catch (error) {
      console.error('Error saving data:', error)
      alert('Gagal menyimpan data: ' + error.message)
    }
  }

  const readCategory = async () => {
    try {
      const res = await getDocs(categoryCollection)
      categories.value = res.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }))
    } catch (error) {
      console.error('Error reading categories:', error)
      alert('Gagal membaca data: ' + error.message)
    }
  }

  const getIdData = (item) => {
    category.value.id = item.id
    category.value.name = item.name
    category.value.description = item.description
    category.value.isUpdate = true
  }

  const getData = (item) => {
    dialogDetail.value = true
    category.value = {
      id: item.id,
      name: item.name,
      description: item.description,
      isUpdate: false,
    }
  }

  const tambahData = () => {
    dialog.value = true
    clearData()
  }

  const editData = (item) => {
    category.value = {
      id: item.id,
      name: item.name,
      description: item.description,
      isUpdate: true,
    }
    dialog.value = true
  }

  const deleteData = (item) => {
    getIdData(item)
    dialogDelete.value = true
  }

  const destroyData = async (itemId) => {
    try {
      await deleteDoc(doc(categoryCollection, itemId))
      alert('Data berhasil dihapus!')
      dialogDelete.value = false
      clearData()
      await readCategory()
    } catch (error) {
      console.error('Error deleting data:', error)
      alert('Gagal menghapus data: ' + error.message)
    }
  }
  return {
    dialog,
    form,
    category,
    onSubmitData,
    readCategory,
    categories,
    getData,
    dialogDetail,
    tambahData,
    editData,
    dialogDelete,
    deleteData,
    destroyData,
  }
})
