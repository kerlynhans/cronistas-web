const ListArticle = ({ num }) => {
  return (
    <div className="card__post__list">
      <div className="list-number">
        <span>{num}</span>
      </div>
      <a href="#" className="category">
        covid-19
      </a>
      <ul className="list-inline">
        <li className="list-inline-item">
          <h5>
            <a href="#">
              Gegera Corona, Kekayaan Bos Zoom Nambah Rp 64 T dalam 3 Bulan -
              CNBC Indonesia
            </a>
          </h5>
        </li>
      </ul>
    </div>
  );
};

export default ListArticle;
