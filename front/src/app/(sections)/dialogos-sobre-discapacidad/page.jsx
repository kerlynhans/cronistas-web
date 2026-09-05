import CardArticle4b from "@/components/CardArticle/CardArticle4b";
import Paginator from "@/components/Paginator/Paginator";

export default async function DialogsPage1({ params }) {
  const { page } = await params;

  return (
    <aside className="wrapper__list__article">
      <div className="wrapp__list__article-responsive">
        <CardArticle4b />
        <CardArticle4b />
        <CardArticle4b />
        <CardArticle4b />
      </div>
      <div className="mx-auto">
        <Paginator />
      </div>
    </aside>
  );
}
