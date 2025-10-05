import Link from "next/link";

import styles from "./MainLogo.module.scss";
import logo from "@/images/logo-cronistas.svg";

const MainLogo = ({ width, hasLink, className }) => {
  return (
    <figure className={`${styles.mainLogo} ${className}`}>
      {hasLink ? (
        <Link href="/">
          <img src={logo.src} width={width} alt="" className="img-fluid logo" />
          <span>Su periódico</span>
        </Link>
      ) : (
        <img src={logo.src} width={width} alt="" className="img-fluid logo" />
      )}
    </figure>
  );
};

export default MainLogo;
