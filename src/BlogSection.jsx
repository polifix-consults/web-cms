import React from "react";
import "./BlogSection.css";
import useArticles from "./useArticles";
import { Delete } from "./services/fetchArticle";

const BlogSection = () => {
  const { Article, isLoading, error } = useArticles();

  if (isLoading) return <div>Loading...</div>;

  function onDelete(id) {
    Delete(id);
  }

  return (
    <>
      {Article.Article.map((post, index) => (
        <article className="blogList" key={index}>
          <h2>{post.article_title}</h2>
          <div className="blogListDescript">
            <p>{post.article_body.slice(0, 250) + "..."}</p>
            <figure className="blogListImgBox">
              <img src={post.article_img} alt={post.imageAlt} />
            </figure>
          </div>
          <button onClick={() => onDelete(post.id)}>Delete</button>
        </article>
      ))}
    </>
  );
};

export default BlogSection;
