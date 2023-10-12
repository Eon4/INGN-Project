import { useQuery } from "@tanstack/react-query";
import style from '../../Components/AdminLogin/adminLogin';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { FaUser } from 'font-awesome';


const AdminLogin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  const handleLogin = async (e) => {
    e.preventDefault();

  
    const authToken = process.env.REACT_APP_HYGRAPH_TOKEN;

  
    console.log(data);

    localStorage.setItem('adminToken', token);

    history.push('/admin/dashboard');
  };

  return (
    <div>
      <h2>Admin Login</h2>
      <form onSubmit={handleLogin}>
        <label>
          Username:
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        </label>
        <label>
          Password:
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default AdminLogin;
