import React from "react";
import CardArticle4b from "../CardArticle/CardArticle4b";

const ListNews = ({ articles }) => {
  if (!articles) return null;

  return (
    <aside className="wrapper__list__article">
      <h4 className="border_section">Más artículos</h4>

      <div className="wrapp__list__article-responsive">
        <CardArticle4b data={articles[0]} />
        <CardArticle4b data={articles[1]} />
        <CardArticle4b data={articles[2]} />
        <CardArticle4b data={articles[3]} />
      </div>
    </aside>
  );
};

export default ListNews;
