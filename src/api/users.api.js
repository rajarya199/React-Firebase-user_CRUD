import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs,addDoc,setDoc,doc,updateDoc } from 'firebase/firestore';
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
  

  export async function getAllusers(){
    try{
      
    const snapshot = await getDocs(collection(db, 'users'));
    const users=snapshot.docs.map((doc)=>({
      id:doc.id,
      ...doc.data()
    }))
    return users;

    }

    catch(error){
      console.error("error fetching data",error)
      return [];

    }
  }
 

  export async function updateUser(id, data) {
    try {
      const userRef = doc(db, 'users', id);
      await updateDoc(userRef, data);
      console.log("User updated:", id);

      return true;
    } catch (error) {
      console.error('Error updating user:', error);
      return false;
    }
  }