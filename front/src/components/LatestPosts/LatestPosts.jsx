import React from "react";
import CardArticle11a from "@/components/CardArticle/CardArticle11a";
import CardArticle5b from "@/components/CardArticle/CardArticle5b";

const LatestPosts = () => {
  return (
    <aside className="wrapper__list__article">
      <h4 className="border_section">Debes leer</h4>
      <div className="wrapper__list__article-small">
        <CardArticle11a />

        <div className="mb-3">
          <CardArticle5b />
        </div>
        <div className="mb-3">
          <CardArticle5b />
        </div>
      </div>
    </aside>
  );
};

export default LatestPosts;
