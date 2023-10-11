
import { useQuery } from '@tanstack/react-query';
import { Link } from 'react-router-dom';
import { getNational } from '../../Queries/National';
import { request } from "graphql-request";
import style from '../../Pages/National/national.module.scss';

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

  if (!data || !data.artikler) {
    return <p>Data is not available.</p>;
  }


  return (
    <section className={style.articleWrapper}>
      {data.artikler.slice(0, 9).map((item, index) => {
        const classNames = [
          style.art1,
          style.art2,
          style.art3,
          style.art4,
          style.art5,
          style.art6,
          style.art7,
          style.art8,
          style.art9,
        ];

        const className = classNames[index % classNames.length];

        return (
          <article
            key={index}
            className={className}
            style={{ gridArea: "article" + (index + 1) }}
          >
            <div>
              <h2>{item.articleTitle}</h2>
              <p>
                D. {item.date} - af {item.author}
              </p>
              <Link to={`/article/${item.id}`}>Læs mere</Link>
            </div>
            <img src={item.image.url} alt={item.descriptionOfImage} />
          </article>
        );
      })}
    </section>
  );
};

export default National;