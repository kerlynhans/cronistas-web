import Link from "next/link";

const TagsArticle = () => {
  return (
    <div className="blog-tags">
      <ul className="list-inline">
        <li className="list-inline-item">
          <i className="fa fa-tags"></i>
        </li>
        <li className="list-inline-item">
          <Link href="/temas?q=theme">#property</Link>
        </li>
        <li className="list-inline-item">
          <Link href="/temas?q=theme">#sea</Link>
        </li>
        <li className="list-inline-item">
          <Link href="/temas?q=theme">#programming</Link>
        </li>
        <li className="list-inline-item">
          <Link href="/temas?q=theme">#sea</Link>
        </li>
        <li className="list-inline-item">
          <Link href="/temas?q=theme">#property</Link>
        </li>
      </ul>
    </div>
  );
};

export default TagsArticle;
