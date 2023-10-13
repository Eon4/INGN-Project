import { useState } from 'react';
import style from '../../Components/AdminLogin/adminLogin.module.scss';

const AdminPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Login logic here (e.g., validate username and password)
    if (username === 'admin' && password === 'password') {
      alert('Logged in successfully!');
    } else {
      alert('Invalid username or password');
    }
  };

  const handleReset = () => {
    setUsername('');
    setPassword('');
  };

  return (
    <div className={style.AdminPageContainer}>
      <h2 className={style.AdminHeading}>Admin Login</h2>
      <div className={style.AdminForm}>
        <label htmlFor="username" className={style.AdminLabel}>
          Username:
        </label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className={style.AdminInput}
        />

        <label htmlFor="password" className={style.AdminLabel}>
          Password:
        </label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className={style.AdminInput}
        />

        <div className={style.AdminButtons}>
          <button onClick={handleLogin} className={style.AdminLoginButton}>
            Login
          </button>
          <button onClick={handleReset} className={style.AdminResetButton}>
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
