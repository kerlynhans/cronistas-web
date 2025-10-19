const TopBanner = ({ data }) => {
  return (
    <div className="article__entry">
      <div className="banner__image">
        <a href={data.cta} target="_blank">
          <img src={data.image} alt="Banner top" className="img-fluid" />
        </a>
      </div>
      <div className="article__content">
        <h5>
          <a href={data.cta} target="_blank">
            {data.text}
          </a>
        </h5>
      </div>
    </div>
  );
};

export default TopBanner;
