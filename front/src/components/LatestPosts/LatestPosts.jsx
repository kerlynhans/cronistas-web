import React from "react";
import CardArticle11a from "@/components/CardArticle/CardArticle11a";
import CardArticle5b from "@/components/CardArticle/CardArticle5b";

const LatestPosts = ({ articles }) => {
  if (!articles) return null;

  return (
    <aside className="wrapper__list__article">
      <h4 className="border_section">Recomendados</h4>
      <div className="wrapper__list__article-small">
        <CardArticle11a data={articles[0]} />

        <div className="mb-3">
          <CardArticle5b data={articles[1]} />
        </div>
        <div className="mb-3">
          <CardArticle5b data={articles[2]} />
        </div>
      </div>
    </aside>
  );
};

export default LatestPosts;
