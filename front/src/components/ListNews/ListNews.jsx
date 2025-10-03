import React from "react";
import CardArticle4b from "../CardArticle/CardArticle4b";

const ListNews = () => {
  return (
    <aside className="wrapper__list__article">
      <h4 className="border_section">technology</h4>

      <div className="wrapp__list__article-responsive">
        <CardArticle4b />
        <CardArticle4b />
        <CardArticle4b />
        <CardArticle4b />
      </div>
    </aside>
  );
};

export default ListNews;
