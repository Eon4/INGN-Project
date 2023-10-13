import React from 'react';
import { Link } from 'react-router-dom';
import style from '../../Components/AdminLogin/adminLogin.module.scss';
import Icon from '../../assets/images/adminUser.png';

const AdminIcon = () => {
  return (
    <div className={style.IconContainer}>
      <Link to="/adminpage">
        <img className={style.MyIcon} src={Icon} alt="Admin Icon" />
      </Link>
    </div>
  );
};

export default AdminIcon;
