
import React from 'react';
import Navigation from '../Components/Navigation/nav';
import {Footer} from '../Components/Footer/footer'
import { Outlet } from 'react-router-dom';
import { BurgerMenu } from "../Components/Navigation/mobileNav";

// import { Header } from "../Components/Header/header"


const MainLayout = () => {
  return (
    <div>
        <Navigation />
        <BurgerMenu /> {/* Include the BurgerMenu component here */}

      <main>
        <Outlet />
      </main>
      <Footer/>

    </div>
  );
};

export default MainLayout;