import AdBanner from "@/components/AdBanner/AdBanner";
import GridNews from "@/components/GridNews/GridNews";
import LatestPosts from "@/components/LatestPosts/LatestPosts";
import ListNews from "@/components/ListNews/ListNews";
import MainNews from "@/components/MainNews/MainNews";
import Paginator from "@/components/Paginator/Paginator";
import PopularPosts from "@/components/PopularPosts/PopularPosts";
import RecentPosts from "@/components/RecentPosts/RecentPosts";
import SocialMedia from "@/components/SocialMedia/SocialMedia";
import TagsCloud from "@/components/TagsCloud/TagsCloud";
import ThemeNews from "@/components/ThemeNews/ThemeNews";
import TrendingNews from "@/components/TrendingNews/TrendingNews";

export default function Home() {
  return (
    <main>
      <TrendingNews />
      <MainNews />

      <section className="pt-0">
        <div className="popular__section-news">
          <div className="container">
            <div className="row">
              <RecentPosts />
              <PopularPosts />
            </div>
          </div>
        </div>

        <ThemeNews />

        <div className="mt-4">
          <div className="container">
            <div className="row">
              <div className="col-md-8">
                <GridNews />
                <ListNews />
              </div>
              <div className="col-md-4">
                <div className="sticky-top">
                  <LatestPosts />
                  <SocialMedia />
                  <TagsCloud />
                  <AdBanner />
                </div>
              </div>

              <div className="mx-auto">
                <Paginator />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
