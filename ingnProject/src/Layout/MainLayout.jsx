
import React from 'react';
import Navigation from '../Components/Navigation/nav';
import {Footer} from '../Components/Footer/footer'
import { Outlet } from 'react-router-dom';
import { BurgerMenu } from "../Components/Navigation/mobileNav";

const MainLayout = () => {
  return (
    <div> 
       <Navigation />
        <BurgerMenu /> 
         <main>
        <Outlet />
      </main>
     <Footer/>
   </div>
  );
};

export default MainLayout;