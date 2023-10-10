import { useQuery } from "@tanstack/react-query";
import { request } from "graphql-request";
import { useParams } from "react-router-dom";
import { oneArticle } from  '../../Queries/OneArticle';

export const OneArticle = () => {
  const { id } = useParams();

  const { data, isLoading, error } = useQuery({
    queryKey: ["giveMeOneArticle"],
    queryFn: async () =>
      request(import.meta.env.VITE_PUBLIC_URL_ID, oneArticle, { id: id }),
  });

  console.log(data);

  if (isLoading) {
    return <p>Loading... </p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }
  return (
    <article>
      <img src={data.artikler.image.url} alt={data.artikler.descriptionOfImage} />
      <div className={style.titleAndDate}>
        <h2>{data.artikler.title}</h2>
        <p>
          D. {data.artikler.date} - af {data.artikler.author}
        </p>
      </div>
      <section className={style.content}
        dangerouslySetInnerHTML={{ __html: data.artikler.content.html }}
      />
    </article>
  );
};