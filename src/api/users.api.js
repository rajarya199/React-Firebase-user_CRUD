import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs,addDoc,setDoc } from 'firebase/firestore';
import app from "../config/firebase.config.js"

const db = getFirestore(app);

export async function addUser() {
    try {
      const res = await addDoc(collection(db, "users"), {
        name: "hari",
        age: 20,
        gender: "male"
      });
      console.log("Document written with ID:", res.id);
      return res.id;
    } catch (error) {
      console.log(error);
    }
  }
  
 