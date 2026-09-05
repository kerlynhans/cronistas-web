import AdBanner from "@/components/AdBanner/AdBanner";
import CardArticle13 from "@/components/CardArticle/CardArticle13";
import CardArticle13a from "@/components/CardArticle/CardArticle13a";
import CardArticle4b from "@/components/CardArticle/CardArticle4b";
import Paginator from "@/components/Paginator/Paginator";
import SocialMedia from "@/components/SocialMedia/SocialMedia";
import Breadcrumb from "@/components/Breadcrumb/Breadcrumb";
import MasonaryArticles from "@/components/MasonaryArticles/MasonaryArticles";

export default function Líbano() {
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
                <h1>El Líbano y su historia</h1>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Doloribus nemo blanditiis optio officiis. Nam, harum.
                </p>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-12">
              <MasonaryArticles />

              <div className="mt-4 mb-4 text-center">
                <a href="#" className="btn btn-primary" id="loadMore">
                  load more
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
