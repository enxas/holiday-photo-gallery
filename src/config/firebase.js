import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth, GoogleAuthProvider } from 'firebase/auth'

const firebaseConfig = {
	apiKey: "AIzaSyAP9NUjba6nZHp23iZqB002jvCtSjvm6AE",
	authDomain: "holiday-photo-gallery.firebaseapp.com",
	projectId: "holiday-photo-gallery",
	storageBucket: "holiday-photo-gallery.appspot.com",
	messagingSenderId: "621014161721",
	appId: "1:621014161721:web:771c330d16c9a6a97230e8"
}

const app = initializeApp(firebaseConfig)

// init firebase services
export const db = getFirestore(app)
export const auth = getAuth(app)

export const googleProvider = new GoogleAuthProvider()