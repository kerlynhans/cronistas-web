import React from "react";
import Breadcrumb from "@/components/Breadcrumb/Breadcrumb";
import ArticleDetail from "@/components/ArticleDetail/ArticleDetail";
import TagsArticle from "@/components/TagsArticle/TagsArticle";
import ProfileAuthor from "@/components/ProfileAuthor/ProfileAuthor";
import RelatedNews from "@/components/RelatedNews/RelatedNews";
import LatestPosts from "@/components/LatestPosts/LatestPosts";
import SocialMedia from "@/components/SocialMedia/SocialMedia";
import TagsCloud from "@/components/TagsCloud/TagsCloud";
import AdBanner from "@/components/AdBanner/AdBanner";
import { getSingleArticle } from "@/services/Articles";
import { notFound } from "next/navigation";

export default async function ArticlePage({ params }) {
  const { slug } = await params;
  const article = await getSingleArticle(`/articulos/${slug}`);

  if (!article) {
    notFound();
  }

  return (
    <main>
      <section className="pb-80">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <Breadcrumb />
            </div>
            <div className="col-md-8">
              <ArticleDetail {...article} />
              <TagsArticle tags={article.tags} />

              {/* <ProfileAuthor /> */}

              <div className="row">
                <div className="col-md-6">
                  <div className="single_navigation-prev">
                    <a href="#">
                      <span>Anterior articulo</span>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Rem, similique.
                    </a>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="single_navigation-next text-left text-md-right">
                    <a href="#">
                      <span>Siguiente artículo</span>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Perferendis, nesciunt.
                    </a>
                  </div>
                </div>
              </div>
              <div className="clearfix"></div>

              <RelatedNews />
            </div>
            <div className="col-md-4">
              <div className="sticky-top">
                <LatestPosts />
                <SocialMedia />
                <TagsCloud />
                <AdBanner />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
