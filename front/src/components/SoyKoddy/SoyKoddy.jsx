import logo from "./logo-koddy.png";
import styles from "./SoyKoddy.module.scss";

const SoyKoddy = () => {
  return (
    <div className={styles.soyKoddy}>
      <ul>
        <li>Powered By:</li>
        <li>
          <a href="https://koddy.co" title="koddy.co" target="_blank">
            <img className="logo" src={logo.src} alt="Logo Koddy" />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default SoyKoddy;
