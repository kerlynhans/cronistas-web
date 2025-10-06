import AdBanner from "@/components/AdBanner/AdBanner";
import Breadcrumb from "@/components/Breadcrumb/Breadcrumb";
import CardArticle11a from "@/components/CardArticle/CardArticle11a";
import CardArticle4b from "@/components/CardArticle/CardArticle4b";
import TagsCloud from "@/components/TagsCloud/TagsCloud";
import Paginator from "@/components/Paginator/Paginator";
import AsideNews from "@/components/AsideNews/AsideNews";

export default function Category({ slug }) {
  return (
    <main>
      <section>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <Breadcrumb />
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <div className="wrapper__list__article ">
                <h4 className="border_section">Category title</h4>

                <CardArticle4b />
                <CardArticle4b />
                <CardArticle4b />
                <CardArticle4b />
                <CardArticle4b />
                <CardArticle4b />
                <CardArticle4b />
                <CardArticle4b />

                <div className="mx-auto">
                  <Paginator />
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="sidebar-sticky">
                <AsideNews />
                <TagsCloud />
                <AdBanner />
              </div>
            </div>

            <div className="clearfix"></div>
          </div>
        </div>
      </section>
    </main>
  );
}
