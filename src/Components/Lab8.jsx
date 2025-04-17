// Lab8 (User Management Component)
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Lab8.css';
import { useNavigate } from 'react-router-dom';

const API_URL = 'https://67d25b7590e0670699bd31f2.mockapi.io/user';

const Lab8 = () => {
  const [users, setUsers] = useState([]);
  const [formData, setFormData] = useState({
    fullname: '',
    email: '',
    password: '',
    profileImageUrl: '',
    role: '2', // Default role set to '2' (User)
  });
  const [editingId, setEditingId] = useState(null); // Track the user being edited
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    // Check if the user is authenticated (by checking localStorage)
    const user = JSON.parse(localStorage.getItem('user'));
    if (!user) {
      navigate('/lab10'); // Redirect to the login page if not authenticated
    }

    fetchUsers();
  }, [navigate]);

  // 🔹 Fetch Users from API
  const fetchUsers = async () => {
    try {
      const response = await axios.get(API_URL);
      setUsers(response.data);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  // 🔹 Handle Form Data Change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // 🔹 Handle User Form Submit (Add or Edit)
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editingId) {
        // Update existing user
        await axios.put(`${API_URL}/${editingId}`, formData);
        setEditingId(null);
      } else {
        // Add new user
        await axios.post(API_URL, formData);
      }
      fetchUsers();
      setFormData({ fullname: '', email: '', password: '', profileImageUrl: '', role: '2' });
    } catch (error) {
      console.error('Error adding/updating user:', error);
    }
  };

  // 🔹 Handle Edit User
  const handleEdit = (user) => {
    setFormData({
      fullname: user.fullname,
      email: user.email,
      password: '', // Reset password for security reasons
      profileImageUrl: user.profileImageUrl || '',
      role: user.role.toString() || '2', // Set role (convert to string for the select option)
    });
    setEditingId(user.id);
  };

  // 🔹 Handle Delete User
  const handleDelete = async (id) => {
    try {
      await axios.delete(`${API_URL}/${id}`);
      fetchUsers();
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };

  return (
    <div>
      <h2>User Management</h2>

      {/* User Form */}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="fullname"
          placeholder="Full Name"
          value={formData.fullname}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="profileImageUrl"
          placeholder="Profile Image URL"
          value={formData.profileImageUrl}
          onChange={handleChange}
        />

        {/* Role Selection */}
        <select
          name="role"
          value={formData.role}
          onChange={handleChange}
          required
        >
          <option value="1">Admin</option>
          <option value="2">User</option>
        </select>

        <button type="submit">
          {editingId ? 'Save Changes' : 'Add User'}
        </button>
      </form>

      {/* User Table */}
      <table border="1">
        <thead>
          <tr style={{ backgroundColor: '#dadada' }}>
            <th>Profile</th>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>
                {user.profileImageUrl ? (
                  <img
                    src={user.profileImageUrl}
                    alt="Profile"
                    style={{
                      width: '50px',
                      height: '50px',
                      borderRadius: '50%',
                    }}
                  />
                ) : (
                  <span>No Image</span>
                )}
              </td>
              <td>{user.fullname}</td>
              <td>{user.email}</td>
              <td>{user.role === '1' ? 'Admin' : 'User'}</td>
              <td>
                <button onClick={() => handleEdit(user)} className="edit-button">
                  Edit
                </button>
                <button onClick={() => handleDelete(user.id)} className="delete-button">
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Lab8;
