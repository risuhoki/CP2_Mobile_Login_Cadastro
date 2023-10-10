// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBE56Slz5tQXk2sPx8tb8LBJCg2OeW5a9Y",
    authDomain: "cp2-mobile-7bb32.firebaseapp.com",
    projectId: "cp2-mobile-7bb32",
    storageBucket: "cp2-mobile-7bb32.appspot.com",
    messagingSenderId: "369423934250",
    appId: "1:369423934250:web:36fca16fa3e310703eb453"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const auth = getAuth(app)

export async function cadastrar(usuario) {
    await createUserWithEmailAndPassword(auth, usuario["email"], usuario["senha"])
        .then((dadosUsuario) => {
            console.debug(dadosUsuario)
        })
        .catch((error) => {
            console.debug(error.code + error.message)
        })
}

export async function login(usuario) {
    await signInWithEmailAndPassword(auth, usuario["email"], usuario["senha"])
        .then((dadosUsuario) => {
            console.debug(dadosUsuario)
        })
        .catch((error) => {
            console.debug(error.code + error.message)
        })
}