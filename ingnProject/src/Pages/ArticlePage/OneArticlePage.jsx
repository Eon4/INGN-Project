import React from "react";
import { useQuery } from "@tanstack/react-query";
import { request } from "graphql-request";
import { useParams, useNavigate } from "react-router-dom";
import { oneArticle } from "../../Queries/OneArticle";
import style from "../../Pages/ArticlePage/oneArticlepage.module.scss";

export const OneArticle = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const { data, isLoading, error } = useQuery({
    queryKey: ["giveMeOneArticle", id],
    queryFn: async () =>
      request(import.meta.env.VITE_PUBLIC_URL_ID, oneArticle, { id: id }),
  });

  const goBack = () => {
    // Navigate back to the previous page
    navigate(-1);
  };

  if (isLoading) {
    return <p>Loading...</p>;
  }
  console.log(data);

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  if (!data || !data.artikler) {
    return <p>Data is not available.</p>;
  }

  const article = data.artikler[0];

  if (!article.image || !article.image.url) {
    return <p>Image is not available for this article.</p>;
  }

  return (
    <div>
      <article className={style.oneArticle}>
        <img src={article.image.url} alt="" />
        <div className={style.titleAndDate}>
          <h2>{article.articleTitle}</h2>
          <p>
            D. {article.date} - af {article.author}
          </p>
        </div>
        <section
          className={style.content}
          dangerouslySetInnerHTML={{ __html: article.articleContent.text }}
        />
        <div>
        <button  className={style.goBackButton} onClick={goBack}>Gå Tilbage</button>
        </div>
      </article>
    
    </div>
  );
};
