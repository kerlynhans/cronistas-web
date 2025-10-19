import CardArticle2 from "@/components/CardArticle/CardArticle2";
import CardArticle1 from "@/components/CardArticle/CardArticle1";

const MainNews = ({ articles }) => {
  if (!articles) return null;

  return (
    <section>
      {/* Popular news  header */}
      <div className="popular__news-header">
        <div className="container">
          <div className="row no-gutters">
            <div className="col-md-8 ">
              <div className="card__post-carousel">
                <CardArticle2 data={articles[0]} />
              </div>
            </div>
            <div className="col-md-4">
              <div className="popular__news-right">
                <CardArticle1 data={articles[1]} />
                <CardArticle1 data={articles[2]} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainNews;
