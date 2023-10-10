
import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { Link, useParams } from 'react-router-dom';
import { getNational } from '../../Queries/National';
// import style from '../../Pages/HomePage/homePage.module.scss';

export const National = () => {
  
  return (
    <div>
      <h2>National page is right here</h2>
  

      {/* <h3>
        <Link to="/blogPage" className={style.LatestArticlesLink}>
          Latest Blogs
        </Link>
      </h3> */}
    </div>
  );
};

export default National;