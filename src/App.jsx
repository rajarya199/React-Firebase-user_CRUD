import { useState ,useEffect} from 'react';
import { Edit, Delete ,Trash} from 'lucide-react';

import './App.css';
import './index.css';
import { addUser, getAllusers, updateUser } from './api/users.api';

function App() {
  const [usersInfo, setUsersInfo] = useState([]);
  const [editingId, setEditingId] = useState(null);

  const [userData, setUserData] = useState({
    name: '',
    age: '',
    gender: '',
  });
  const fetchUsers = async () => {
    const data = await getAllusers();
    setUsersInfo(data);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newUser = {
      ...userData,
      age: parseInt(userData.age, 10),
    };

    if (editingId) {
      // Update existing user
      const success = await updateUser(editingId, newUser);
      if (success) {
        alert('User updated successfully');
        setEditingId(null);
      } else {
        alert('Failed to update user');
      }
    } else {
      // Add new user
      const id = await addUser(newUser);
      if (id) {
        alert(`User added with ID: ${id}`);
      } else {
        alert('Failed to add user');
      }
    }
    setUserData({ name: '', age: '', gender: '' });
    fetchUsers()
  };

   // Populate form with user data for editing
   const handleEdit = (user) => {
    setUserData({
      name: user.name,
      age: user.age,
      gender: user.gender,
    });
    setEditingId(user.id);
  };


  return (
    <>
      <div className="app-container">
      <h2 className="form-title">Add User</h2>
      <form onSubmit={handleSubmit} className="user-form">
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
        <button type="submit">{editingId ? 'Update User' : 'Add User'}</button>
      </form>
      </div>
      <div className='container'>
      <h3 style={{ marginTop: '1rem',textAlign:'center' }}>User List</h3>

<table className="user-table">
  <thead>
    <tr>
      <th>Name</th>
      <th>Age</th>
      <th>Gender</th>
      <th>Action</th>
    </tr>
  </thead>
  <tbody>
    {usersInfo.length === 0 ? (
      <tr><td colSpan="3" style={{ textAlign: 'center' }}>No users found</td></tr>
    ) : (
      usersInfo.map((user) => (
        <tr key={user.id}>
          <td>{user.name}</td>
          <td>{user.age}</td>
          <td>{user.gender}</td>
          <td>
            <button className="edit-btn"
            onClick={()=>handleEdit(user)}
            title='edit user'
            >
              <Edit />
            </button>
            <button className="delete-btn">
              <Trash />
            </button>
          </td>
        </tr>
      ))
    )}
  </tbody>
</table>
      </div>
     
  
    </>
  
  );
}

export default App;
