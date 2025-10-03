import React from "react";
import CardArticle11 from "@/components/CardArticle/CardArticle11";

const GridNews = () => {
  return (
    <aside className="wrapper__list__article mb-0">
      <h4 className="border_section">lifestyle</h4>
      <div className="row">
        <div className="col-md-6">
          <div className="mb-4">
            <CardArticle11 />
          </div>
          <div className="mb-4">
            <CardArticle11 />
          </div>
          <div className="mb-4">
            <CardArticle11 />
          </div>
        </div>
        <div className="col-md-6">
          <div className="mb-4">
            <CardArticle11 />
          </div>
          <div className="mb-4">
            <CardArticle11 />
          </div>
          <div className="mb-4">
            <CardArticle11 />
          </div>
        </div>
      </div>
    </aside>
  );
};

export default GridNews;
