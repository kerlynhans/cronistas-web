import Image from "next/image";

const ArticleImage = ({ src, alt, w, h, placeholder }) => {
  return src ? (
    <Image src={src} className="img-fluid" alt={alt} width={w} height={h} />
  ) : (
    <img src={placeholder} className="img-fluid" alt={alt} />
  );
};

export default ArticleImage;
