import { useState } from 'react';
import './App.css'
import { addUser } from './api/users.api';
function App() {
const[user,setuser]=useState({
  name: '',
  age: '',
  gender: '',
})
  return (
    <>
     <h2>hello</h2>
     <div>
      <button onClick={()=>{
        addUser().then((res)=>{
          console.log(res)
        })
      }}>add user</button>
     </div>
    </>
  )
}

export default App
