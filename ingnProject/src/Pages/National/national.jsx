
import { useQuery } from '@tanstack/react-query';
import { Link } from 'react-router-dom';
import { getNational } from '../../Queries/National';
import { request } from "graphql-request";
import style from '../../Pages/HomePage/homePage.module.scss';

export const National = () => {

  const { data, isLoading, error } = useQuery({
    queryKey: ['getNational'],
    queryFn: async () =>
      request(import.meta.env.VITE_PUBLIC_URL_ID, getNational),
  });
  console.log(data)


  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  if (!data) {
    return <p>Data is undefined</p>; 
  }
  

  return (
    <>
      {data.artikler.map((item, index) => {
        return (
          <article key={index}>
            <h2>{item.articleTitle}</h2>
            <p>
              D. {item.date} - af {item.author}
            </p>
            <img src={item.image.url} alt={item.descriptionOfImage} />
            <Link to={`/${item.id}`}>Læs mere</Link>
          </article>
        );
      })}
    </>
  );
};

export default National;