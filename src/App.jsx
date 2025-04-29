import { useState } from 'react';
import './App.css'
import { addUser } from './api/users.api';
function App() {
const[userData,setUserData]=useState({
  name: '',
  age: '',
  gender: '',
})
const handleChange = (e) => {
  const { name, value } = e.target;
  setUserData((prev) => ({
    ...prev,
    [name]: value,
  }));
};

const handleSubmit = async (e) => {
  e.preventDefault();

  // Convert age to number before sending
  const newUser = {
    ...userData,
    age: parseInt(userData.age, 10),
  };

  const id = await addUser(newUser);
  if (id) {
    alert(`User added with ID: ${id}`);
    setUserData({ name: '', age: '', gender: '' }); // Reset form
  }
};

  return (
    <>
     <h2>Add user</h2>

     <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '10px', width: '200px' }}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={userData.name}
          onChange={handleChange}
          required
        />
        <input
          type="number"
          name="age"
          placeholder="Age"
          value={userData.age}
          onChange={handleChange}
          required
        />
        <select name="gender" value={userData.gender} onChange={handleChange} required>
          <option value="">Select Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
        <button type="submit">Add User</button>
      </form>
    </>
  )
}

export default App
