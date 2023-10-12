
import React from 'react';
import Navigation from '../Components/Navigation/nav';
// import AdminIcon from '../Components/AdminLogin/adminIcon';
import {Footer} from '../Components/Footer/footer'
import { Outlet } from 'react-router-dom';
import { BurgerMenu } from "../Components/Navigation/mobileNav";

const MainLayout = () => {
  return (
    <div> 
      {/* <AdminIcon/> */}

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