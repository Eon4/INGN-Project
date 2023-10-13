import React, { useState } from 'react';
import style from '../AdminPage/adminPage.module.scss';
import { useNavigate } from 'react-router-dom';
import { useAccessKey } from "../../utils/UserContext";

const AdminPage = () => {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { setAccessKey } = useAccessKey();
  const navigate = useNavigate();

    // Checking whether the username and password are correct and sends one back to the homepage or displays an alert with an error.
    const handelSubmit = (e) => {
      e.preventDefault();
      if(username === "admin" && password === "1234") {
          setAccessKey("valid");
          navigate('/');
          alert ("Yay! Du er logget ind");
      } else {
          alert("Login mislykkes");
      }
  };

  const handleReset = () => {
    setUsername('');
    setPassword('');
  };

  return (
    <section className={style.container}>
      <p className={style.title}>ADMIN LOGIN</p>
      <form className={style.form} onSubmit={handelSubmit}>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className={style.input}
          placeholder="Username"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className={style.input}
          placeholder="Password"
        />
        <div className={style.buttonContainer}>
          <button type="submit" className={style.button}>
            Login
          </button>
          <button type="button" className={style.resetButton} onClick={handleReset}>
            Reset
          </button>
        </div>
      </form>
    </section>
  );
};

export default AdminPage;
