import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs,addDoc,setDoc } from 'firebase/firestore';
import app from "../config/firebase.config.js"

const db = getFirestore(app);

export async function addUser({name,age,gender}) {
    try {
      const res = await addDoc(collection(db, "users"), {
        name,
        age,
        gender
      });
      console.log("Document written with ID:", res.id);
      return res.id;
    } catch (error) {
      console.log(error);
    }
  }
  
 