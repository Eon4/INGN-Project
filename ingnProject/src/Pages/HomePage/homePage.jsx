
import React from 'react';
import { Link } from 'react-router-dom';
import style from '../../Pages/HomePage/homePage.module.scss';

const Homepage = () => {
  return (
    <div className={style.HomepageContainer}>
      <h2>Homepage is here</h2>
  

      {/* <h3>
        <Link to="/blogPage" className={style.LatestArticlesLink}>
          Latest Blogs
        </Link>
      </h3> */}
    </div>
  );
};

export default Homepage;