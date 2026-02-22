import React from "react";
import CardArticle11 from "@/components/CardArticle/CardArticle11";

const GridNews = ({ articles }) => {
  if (!articles) return null;

  return (
    <aside className="wrapper__list__article mb-0">
      <h4 className="border_section">Actualidad</h4>
      <div className="row">
        <div className="col-md-6">
          <div className="mb-4">
            <CardArticle11 data={articles[0]} />
          </div>
          <div className="mb-4">
            <CardArticle11 data={articles[2]} />
          </div>
          <div className="mb-4">
            <CardArticle11 data={articles[4]} />
          </div>
        </div>
        <div className="col-md-6">
          <div className="mb-4">
            <CardArticle11 data={articles[1]} />
          </div>
          <div className="mb-4">
            <CardArticle11 data={articles[3]} />
          </div>
          <div className="mb-4">
            <CardArticle11 data={articles[5]} />
          </div>
        </div>
      </div>
    </aside>
  );
};

export default GridNews;
