import CardArticle11a from "@/components/CardArticle/CardArticle11a";
import CardArticle5b from "@/components/CardArticle/CardArticle5b";

const AsideNews = () => {
  return (
    <aside className="wrapper__list__article ">
      <h4 className="border_section">Sidebar</h4>
      <div className="wrapper__list__article-small">
        <div className="mb-3">
          <CardArticle5b />
        </div>
        <div className="mb-3">
          <CardArticle5b />
        </div>
        <div className="mb-3">
          <CardArticle5b />
        </div>

        <CardArticle11a />
      </div>
    </aside>
  );
};

export default AsideNews;
