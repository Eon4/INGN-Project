
import React from 'react';
import style from '../Navigation/nav.module.scss'

const Navigation = () => {
  return (
    <nav className ={style.topnavigation}>
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/allpages">Alle</a></li>
        <li><a href="/national">Indland</a></li>
        <li><a href="/International">Udland</a></li>
        <li><a href="/technology">Teknologi</a></li>
        <li><a href="/sport">Sport</a></li>
        <li><a href="/politics">Politik</a></li>
        <li><a href="/society">Samfund</a></li>
      </ul>
    </nav>
  );
};

export default Navigation;