import Link from "next/link";

const TagsArticle = ({ tags }) => {
  if (!tags.length) {
    return null;
  }
  return (
    <div className="blog-tags">
      <ul className="list-inline">
        <li className="list-inline-item">
          <i className="fa fa-tags"></i>
        </li>
        {tags.map((tag) => (
          <li className="list-inline-item">
            <Link href={`/temas?q=${tag.name}`}>#{tag.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TagsArticle;
