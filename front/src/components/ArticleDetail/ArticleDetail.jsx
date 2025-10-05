import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faXTwitter,
  faWhatsapp,
  faTelegram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

const ArticleDetail = () => {
  return (
    <div className="wrap__article-detail">
      <div className="wrap__article-detail-title">
        <h1>
          El Líbano presente en la Feria Internacional del Libro de Bogotá 2023
        </h1>
        <h3>
          El Líbano en la Feria Internacional del Libro de Bogotá. Musgonia
          presente en la FILBO 2023. Único municipio de Colombia que cuenta con
          Stan en la Feria Internacional del Libro de Bogotá
        </h3>
      </div>
      <hr />
      <div className="wrap__article-detail-info">
        <ul className="list-inline">
          <li className="list-inline-item">
            <figure className="image-profile">
              <img
                src="/images/placeholder/80x80.jpg"
                alt=""
                className="img-fluid"
              />
            </figure>
          </li>
          <li className="list-inline-item">
            <span>Por </span>
            <a href="#">Editorial Cronistas</a>.{" "}
          </li>
          <li className="list-inline-item mx-1">
            <span className="text-dark text-capitalize ml-1">
              Diciembre 09, 2024
            </span>
          </li>
          <li className="list-inline-item">
            <span className="text-dark text-capitalize">en </span>
            <a href="#">Política</a>
          </li>
        </ul>
      </div>

      <div className="wrap__article-detail-image mt-4">
        <figure>
          <img src="/images/placeholder/800x500.jpg" alt="" width="100%" />
        </figure>
      </div>
      <div className="wrap__article-detail-content">
        <div className="total-views">
          <div className="total-views-read">
            15.k
            <span>visitas</span>
          </div>

          <ul className="list-inline">
            <span className="share">Compartir: </span>
            <li className="list-inline-item">
              <a className="btn btn-social-o facebook" href="#">
                <FontAwesomeIcon icon={faFacebookF} />
                <span>facebook</span>
              </a>
            </li>{" "}
            <li className="list-inline-item">
              <a className="btn btn-social-o twitter" href="#">
                <FontAwesomeIcon icon={faXTwitter} />
                <span>twitter</span>
              </a>
            </li>{" "}
            <li className="list-inline-item">
              <a className="btn btn-social-o whatsapp" href="#">
                <FontAwesomeIcon icon={faWhatsapp} />
                <span>whatsapp</span>
              </a>
            </li>
          </ul>
        </div>
        <div className="mt-3">
          <p className="has-drop-cap-fluid">
            El Líbano una vez más hizo presencia en la vitrina literaria de más
            protagonismo en las letras de habla hispana, único municipio de
            Colombia que cuenta con Stan en la Feria Internacional del Libro de
            Bogotá. El Stan de EI Líbano o Biblioteca Libancnsc dc Cultura, 1c
            correspondió el local 642, segundo piso y fue atendido contó por
            Carlos Flaminio Rivera escritor y director de la Casa de la Cultura
            "LuisFlórez"de EI Líbano. Este año La Biblioteca Libanense de
            Cultura publicó nuevos títulos: En la colección Doble Fondo la poeta
            colombiana Mónica Triana y la Mexicana Silvia Eugenia Castillero. En
            la colección Verde Inmenso Textos Críticos del poeta antioqueño Juan
            Manuel Roca. En la colección Mineima la antología de escritores
            libanenses en el libro Orilla Viva, que fue convocada, evaluada y
            seleccionada por el taller de lectura Ágora.
          </p>
          <p>
            Como ya es tradicional el Día de EI Líbano se llevó a cabo el 30 de
            abril en el Gran Salón A de Corferias. Evento de cultura y
            literatura que integra lazos de amistad de la colonia de la
            libanensidad que vive en Bogotá. La administración municipal a
            través de la alcaldesa encargada doctora Lizeth Yureidy Alape
            Prieto, el coordinador de educación y Cultura John Edison Méndicta
            Veloza y cl coordinador de la Casa dc la CUItura*' Luis Flórez"
            escritor Carlos Flaminio Rivera, destacaron ante el público
            asistente la importancia del sector cultural y educativo del
            municipio dc EI Líbanos De otra parte, los nuevos títulos de la
            Biblioteca libanense de Cultura fueron presentados por Juan Manuel
            Rocn, Mónica Triana, Víctor López Rache y el especialista Victor
            Hugo Osorio Céspedes, expositores que mostraron 10 mejor de estas
            tres colecciones.
          </p>
          <p>
            En esta versión 35 de la Feria Internacional Cfilbo del Libro de
            Bogotá que se realizó del 18 de abril al 2 de mayo del 2023. EI Stan
            de La Biblioteca Libanensc dc Cultura, fuc visitado por delegaciones
            de estudiantes de EI Litjano del Colegio San Antonio María Claret y
            dél Instituto Sysdatec. Así mismo, importantes personalidades de la
            literatura, cl libro, cl arte, la cultura, cl deporte, cl
            periodismo, la farándula y la política.
          </p>

          {/* <blockquote className="block-quote">
            <p>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout.
            </p>
            <cite>Tom Cruise</cite>
          </blockquote>

          <h5>How Tech Startup Survive Without Funding</h5>
          <p>
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts. Separated they
            live in Bookmarksgrove right at the coast of the Semantics, a large
            language ocean. A small river named Duden flows by their place and
            supplies it with the necessary regelialia.
          </p> */}
        </div>
      </div>
    </div>
  );
};

export default ArticleDetail;
