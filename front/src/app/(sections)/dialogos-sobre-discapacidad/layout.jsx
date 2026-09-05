import AdBanner from "@/components/AdBanner/AdBanner";
import CardArticle13 from "@/components/CardArticle/CardArticle13";
import CardArticle13a from "@/components/CardArticle/CardArticle13a";
import SocialMedia from "@/components/SocialMedia/SocialMedia";
import LatestPosts from "@/components/LatestPosts/LatestPosts";
import Breadcrumb from "@/components/Breadcrumb/Breadcrumb";

export const metadata = {
  title: "Diálogos sobre discapacidad",
  description: "Descripción de la sección de diálogos sobre discapacidad",
};

export default function SectionLayout({ children }) {
  return (
    <main>
      <section className="pb-80">
        <div className="container">
          <div className="text-center">
            <Breadcrumb items={[{ title: "Diálogos sobre discapacidad" }]} />
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
                </div>
                <div className="col-lg-6">
                  <CardArticle13a />
                </div>
              </div>

              {/* Render specific content */ children}
            </div>

            <div className="col-lg-4">
              <div className="sticky-top mt-3">
                {/* Must read news: Recomendados */}
                <LatestPosts articles={[]} />

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
