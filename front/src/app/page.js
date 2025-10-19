import AdBanner from "@/components/AdBanner/AdBanner";
import GridNews from "@/components/GridNews/GridNews";
import LatestPosts from "@/components/LatestPosts/LatestPosts";
import ListNews from "@/components/ListNews/ListNews";
import MainBanners from "@/components/MainBanners/MainBanners";
import MainNews from "@/components/MainNews/MainNews";
import PopularPosts from "@/components/PopularPosts/PopularPosts";
import RecentPosts from "@/components/RecentPosts/RecentPosts";
import SocialMedia from "@/components/SocialMedia/SocialMedia";
import TagsCloud from "@/components/TagsCloud/TagsCloud";
import ThemeNews from "@/components/ThemeNews/ThemeNews";
import TrendingNews from "@/components/TrendingNews/TrendingNews";

import { getHomeArticles } from "@/services/Articles";
import { getHomeBanners } from "@/services/Banners";

export default async function HomePage() {
  //Retrieve data from server.
  const articles = await getHomeArticles();
  const banners = await getHomeBanners();

  return (
    <main>
      {/* Flash news slider */}
      <TrendingNews articles={articles.flash} />
      {/* Main news with slider */}
      <MainNews articles={articles.main} />
      {/* Main banners carousel */}
      <MainBanners banners={banners.highlight} />

      <section className="pt-0">
        <div className="popular__section-news">
          <div className="container">
            <div className="row">
              {/* Highlighted news: Destacados */}
              <RecentPosts />
              {/* Most readed news: Lo mas leido */}
              <PopularPosts />
            </div>
          </div>
        </div>

        {/* Chronicles with slider */}
        <ThemeNews />

        <div className="mt-4">
          <div className="container">
            <div className="row">
              <div className="col-md-8">
                {/* Latest news: Actualidad */}
                <GridNews />
                {/* Recent news: Publicaciones recientes */}
                <ListNews />
              </div>
              <div className="col-md-4">
                <div className="sticky-top">
                  {/* Must read news: Debes leer */}
                  <LatestPosts />

                  {/* Other sidebar elements */}
                  <SocialMedia />
                  <TagsCloud />
                  <AdBanner />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
