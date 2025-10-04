import ListArticle from "@/components/ListArticle/ListArticle";

const PopularPosts = () => {
  return (
    <div className="col-md-12 col-lg-4">
      <aside className="wrapper__list__article">
        <h4 className="border_section">Lo más leído</h4>
        <div className="wrapper__list-number">
          <ListArticle num={1} />
          <ListArticle num={2} />
          <ListArticle num={3} />
          <ListArticle num={4} />
          <ListArticle num={5} />
        </div>
      </aside>
    </div>
  );
};

export default PopularPosts;
