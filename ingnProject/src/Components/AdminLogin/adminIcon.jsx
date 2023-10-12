import { useQuery } from "@tanstack/react-query";
import style from '../../Components/AdminLogin/adminLogin';
import React, { useState } from 'react';
// import { FaUser } from 'font-awesome';


const AdminIcon = () => {
    return (
      <div className={style.IconContainer}>
  {/* <FaUser className="admin-icon" /> */}
      </div>
    );
  };

  export default AdminIcon;
