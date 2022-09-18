import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { toast } from 'react-toastify';

const firebaseConfig = {
  apiKey: "AIzaSyA99KtNLXNT1dI-9OWg28JCAJVAakJRp0w",
  authDomain: "blog-yuu.firebaseapp.com",
  databaseURL: "https://blog-yuu-default-rtdb.firebaseio.com",
  projectId: "blog-yuu",
  storageBucket: "blog-yuu.appspot.com",
  messagingSenderId: "816817853231",
  appId: "1:816817853231:web:8e8e5edc7acc605384c7da",
  measurementId: "G-N4RCTGV3CF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const provide = new GoogleAuthProvider();

export const registerHandler = async (email, password) => {
  try {
    const { user } = await createUserWithEmailAndPassword(auth, email, password)
    toast.success("Regist", {
      position: toast.POSITION.BOTTOM_RIGHT
    })
    return user
  }
  catch (error) {
    toast.error(error.message, {
      position: toast.POSITION.BOTTOM_RIGHT
    })
  }
}

export const loginHandler = async (email, password) => {
  try {
    const { user } = await signInWithEmailAndPassword(auth, email, password)
    toast.success("Login Success", {
      position: toast.POSITION.BOTTOM_RIGHT
    })
    return user
  }
  catch (error) {
    toast.error(error.message, {
      position: toast.POSITION.BOTTOM_RIGHT
    })
  }
}

export const signInGoogle = async () => {
  try {
    const { user } = await signInWithPopup(auth, provide)
    toast.success("Login Success", {
      position: toast.POSITION.BOTTOM_RIGHT
    })
    return user
  }
  catch (error) {
    toast.error(error.message, {
      position: toast.POSITION.BOTTOM_RIGHT
    })
  }
}

export const logOut = async () => {
  await signOut(auth)
  toast.info("Berhasil Logout", {
    position: toast.POSITION.BOTTOM_RIGHT
  })
  return true
}

export default app;