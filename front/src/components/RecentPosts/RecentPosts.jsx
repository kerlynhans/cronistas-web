import CardArticle1 from "../CardArticle/CardArticle1";
import CardArticle5b from "../CardArticle/CardArticle5b";

const RecentPosts = () => {
  return (
    <div className="col-md-12 col-lg-8">
      <div className="wrapper__list__article">
        <h4 className="border_section">Destacados</h4>
      </div>
      <div className="row ">
        <div className="col-sm-12 col-md-6 mb-4">
          <CardArticle1 />
        </div>
        <div className="col-sm-12 col-md-6 mb-4">
          <CardArticle1 />
        </div>
      </div>
      <div className="row ">
        <div className="col-sm-12 col-md-6">
          <div className="wrapp__list__article-responsive">
            <div className="mb-3">
              <CardArticle5b />
            </div>
            <div className="mb-3">
              <CardArticle5b />
            </div>
          </div>
        </div>
        <div className="col-sm-12 col-md-6 ">
          <div className="wrapp__list__article-responsive">
            <div className="mb-3">
              <CardArticle5b />
            </div>
            <div className="mb-3">
              <CardArticle5b />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecentPosts;
