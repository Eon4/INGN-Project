
import React from 'react';
import style from '../Navigation/nav.module.scss'
import { Link } from 'react-router-dom';
import AdminIcon from '../AdminLogin/adminIcon';


 export const Navigation = () => {
  return (
    <nav className ={style.topnavigation}>
 <div className={style.logoContainer}>
       <h1  className={style.logo}>INGN</h1>
      </div>

      <ul>
        {/* <li><a href="/">Home</a></li> */}
        <li><a href="/allpages">Alle</a></li>
        <li><a href="/national">Indland</a></li>
        <li><a href="/International">Udland</a></li>
        <li><a href="/technology">Teknologi</a></li>
        <li><a href="/sport">Sport</a></li>
        <li><a href="/politics">Politik</a></li>
        <li><a href="/society">Samfund</a></li>
      </ul>
      <div className={style.Container}>  <AdminIcon/>
</div>
    </nav>
    
  );
};

export default Navigation;