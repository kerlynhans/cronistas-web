import Link from "next/link";

const TagsCloud = () => {
  return (
    <aside className="wrapper__list__article">
      <h4 className="border_section">Etiquetas</h4>
      <div className="blog-tags p-0">
        <ul className="list-inline">
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
          <li className="list-inline-item">
            <Link href="/temas?q=theme">#life style</Link>
          </li>
          <li className="list-inline-item">
            <Link href="/temas?q=theme">#technology</Link>
          </li>
          <li className="list-inline-item">
            <Link href="/temas?q=theme">#framework</Link>
          </li>
          <li className="list-inline-item">
            <Link href="/temas?q=theme">#sport</Link>
          </li>
          <li className="list-inline-item">
            <Link href="/temas?q=theme">#game</Link>
          </li>
          <li className="list-inline-item">
            <Link href="/temas?q=theme">#wfh</Link>
          </li>
          <li className="list-inline-item">
            <Link href="/temas?q=theme">#sport</Link>
          </li>
          <li className="list-inline-item">
            <Link href="/temas?q=theme">#game</Link>
          </li>
          <li className="list-inline-item">
            <Link href="/temas?q=theme">#wfh</Link>
          </li>
          <li className="list-inline-item">
            <Link href="/temas?q=theme">#framework</Link>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default TagsCloud;
