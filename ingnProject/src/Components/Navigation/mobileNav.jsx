import { Navigation } from "./nav";
import style from '../Navigation/mobileNav.module.scss'
import { useState } from 'react';

export const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={style.burgerMenu}>
      <div className={style.burgerIcon} onClick={toggleMenu}>
        <div className={`${style.bar} ${isOpen ? style.open : ''}`}></div>
        <div className={`${style.bar} ${isOpen ? style.open : ''}`}></div>
        <div className={`${style.bar} ${isOpen ? style.open : ''}`}></div>
      </div>
      {isOpen && (
        <div className={style.menu}>
          <ul>
            <li>
              <a href="/allpages">Alle</a>
            </li>
            <li>
              <a href="/national">Indland</a>
            </li>
            <li>
              <a href="/international">Udland</a>
            </li>
            <li>
              <a href="/technology">Teknologi</a>
            </li>
            <li>
              <a href="/sport">Sport</a>
            </li>
            <li>
              <a href="/politics">Politik</a>
            </li>
            <li>
              <a href="/society">Samfund</a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default BurgerMenu;
