import { initializeApp, getApps, getApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyDo6QmMUUe-FhRCV8hDvYW9OlEU4jIgYJ8",
    authDomain: "cu-housing-f0410.firebaseapp.com",
    projectId: "cu-housing-f0410",
    storageBucket: "cu-housing-f0410.appspot.com",
    messagingSenderId: "1092135805030",
    appId: "1:1092135805030:web:53415b5b9bae50ba948da7",
    measurementId: "G-41X12GRN9R"
}

const app = getApps().length ? getApp() : initializeApp(firebaseConfig)

const db = getFirestore(app)

export { db }
