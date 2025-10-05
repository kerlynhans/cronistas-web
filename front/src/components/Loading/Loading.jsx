"use client";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

import styles from "./Loading.module.scss";
import image from "@/images/loading.png";

const Loading = () => {
  const pathname = usePathname();
  const [loading, setLoading] = useState(true);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    setLoading(true);
    setVisible(true);

    const timeout = setTimeout(() => {
      setLoading(false);
    }, 1000); // simulate load time

    return () => clearTimeout(timeout);
  }, [pathname]);

  useEffect(() => {
    if (!loading) {
      const fadeOut = setTimeout(() => setVisible(false), 500); // match CSS duration
      return () => clearTimeout(fadeOut);
    }
  }, [loading]);

  return visible ? (
    <div
      className={`loading-container ${styles.loading} ${
        loading ? styles.fadeIn : styles.fadeOut
      }`}
    >
      <div className="h-100 d-flex align-items-center justify-content-center">
        <ul className="list-unstyled">
          {/* <li>
            <img src={image.src} alt="Imágen loader" height="100" />
          </li> */}
          <li>
            <div className="spinner">
              <div className="rect1"></div> <div className="rect2"></div>{" "}
              <div className="rect3"></div> <div className="rect4"></div>{" "}
              <div className="rect5"></div>
            </div>
          </li>
          <li>
            <p>Cargando</p>
          </li>
        </ul>
      </div>
    </div>
  ) : null;
};

export default Loading;
