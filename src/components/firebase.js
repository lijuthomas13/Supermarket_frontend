// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getStorage} from 'firebase/storage'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCdRJoJNgQ2lLorZ7g5F0NvJsQIxe53B2k",
  authDomain: "imageupload-d3293.firebaseapp.com",
  projectId: "imageupload-d3293",
  storageBucket: "imageupload-d3293.appspot.com",
  messagingSenderId: "755230816542",
  appId: "1:755230816542:web:a2b8eebb0e6dd2df52710f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage=getStorage(app)