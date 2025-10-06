import AdBanner from "@/components/AdBanner/AdBanner";
import CardArticle13 from "@/components/CardArticle/CardArticle13";
import CardArticle13a from "@/components/CardArticle/CardArticle13a";
import CardArticle4b from "@/components/CardArticle/CardArticle4b";
import Paginator from "@/components/Paginator/Paginator";
import SocialMedia from "@/components/SocialMedia/SocialMedia";
import Breadcrumb from "@/components/Breadcrumb/Breadcrumb";

export default function Dialogs() {
  return (
    <main>
      <section className="pb-80">
        <div className="container">
          <div className="text-center">
            <Breadcrumb />
          </div>
          <div className="title-head">
            <div className="row justify-content-center">
              <div className="col-md-6 col-sm-12 text-center">
                <h1>Diálogos sobre discapacidad</h1>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Doloribus nemo blanditiis optio officiis. Nam, harum.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-8">
              <CardArticle13 />

              <div className="row">
                <div className="col-lg-6">
                  <CardArticle13a />
                  <CardArticle13a />
                </div>
                <div className="col-lg-6">
                  <CardArticle13a />
                  <CardArticle13a />
                </div>
              </div>

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
            </div>

            <div className="col-lg-4">
              <div className="sticky-top">
                <CardArticle13a />
                <CardArticle13a />

                <div className="mt-3">
                  <SocialMedia />
                  <AdBanner />
                </div>
              </div>
            </div>
            <div className="clearfix"></div>
          </div>
        </div>
      </section>
    </main>
  );
}
