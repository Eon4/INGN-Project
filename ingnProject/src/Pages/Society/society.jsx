import { useQuery } from '@tanstack/react-query';
import { Link } from 'react-router-dom';
import { getSociety } from '../../Queries/Society';
import { request } from "graphql-request";
import style from '../../Pages/Society/society.module.scss';

const Society = () => {
  return (
    <div>
      <h2>Society page is right here</h2>
  

      {/* <h3>
        <Link to="/blogPage" className={style.LatestArticlesLink}>
          Latest Blogs
        </Link>
      </h3> */}
    </div>
  );
};

export default Society;