// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDe63k_LECYO2HZCSB8yxLymnCHmHGTT94',
  authDomain: 'portal-berita-7273b.firebaseapp.com',
  projectId: 'portal-berita-7273b',
  storageBucket: 'portal-berita-7273b.firebasestorage.app',
  messagingSenderId: '191038200205',
  appId: '1:191038200205:web:990931c0165fb76e9b85c4',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

// Database
const db = getFirestore(app)
const auth = getAuth(app)

export { db, auth }
