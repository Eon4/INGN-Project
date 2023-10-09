
import React from 'react';
import style from '../Navigation/nav.module.scss'

const Navigation = () => {
  return (
    <nav className ={style.topnavigation}>
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/allpages">All pages</a></li>
      </ul>
    </nav>
  );
};

export default Navigation;