import CardArticle4b from "@/components/CardArticle/CardArticle4b";
import Paginator from "@/components/Paginator/Paginator";

export default function Themes() {
  return (
    <main>
      <section>
        <div className="container">
          <div className="row">
            <div className="col-md-8 mx-auto">
              <div className="wrap__search-result">
                <div className="wrap__search-result-keyword">
                  <h5>
                    Search results for keyword:{" "}
                    <span className="text-primary"> "corona virus" </span> found
                    in 6 posts.{" "}
                  </h5>
                </div>
                <CardArticle4b />
                <CardArticle4b />
                <CardArticle4b />
                <CardArticle4b />
                <CardArticle4b />
                <CardArticle4b />
              </div>

              <div className="mt-4">
                <Paginator />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
