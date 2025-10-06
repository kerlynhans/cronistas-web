import Link from "next/link";

const Breadcrumb = () => {
  return (
    <ul className="breadcrumbs bg-white mb-4">
      <li className="breadcrumbs__item">
        <Link href="/" className="breadcrumbs__url">
          <i className="fa fa-home"></i> Inicio
        </Link>
      </li>
      <li className="breadcrumbs__item">
        <a href="index.html" className="breadcrumbs__url">
          News
        </a>
      </li>
      <li className="breadcrumbs__item breadcrumbs__item--current">World</li>
    </ul>
  );
};

export default Breadcrumb;
