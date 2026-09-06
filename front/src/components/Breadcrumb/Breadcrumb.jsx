import Link from "next/link";

const Breadcrumb = ({ items = [] }) => {
  return (
    <ul className="breadcrumbs bg-white mb-4">
      {/* Fixed initial element */}
      <li className="breadcrumbs__item">
        <Link href="/" className="breadcrumbs__url">
          <i className="fa fa-home"></i> Inicio
        </Link>
      </li>

      {/* Renders dynamic array of items */}
      {items.map((item, index) => {
        const isLast = index === items.length - 1;

        if (isLast) {
          return (
            <li
              key={index}
              className="breadcrumbs__item breadcrumbs__item--current"
            >
              {item.title}
            </li>
          );
        }

        return (
          <li key={index} className="breadcrumbs__item">
            <Link href={item.url || "#"} className="breadcrumbs__url">
              {item.title}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default Breadcrumb;
