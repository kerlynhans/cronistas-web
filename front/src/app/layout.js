import { Poppins, Literata } from "next/font/google";

import Loading from "@/components/Loading/Loading";
import NavbarTop from "@/components/NavbarTop/NavbarTop";
import NavbarKit from "@/components/NavbatKit/NavbatKit";
import FooterMenu from "@/components/FooterMenu/FooterMenu";
import BottomBar from "@/components/BottomBar/BottomBar";

//Date formating
import moment from "moment";
import "moment/locale/es";
moment.locale("es");

//styles
import "@fortawesome/fontawesome-svg-core/styles.css";
import "bootstrap/dist/css/bootstrap.css";
import "swiper/css/bundle";
import "@/styles/main.scss";

const listerataSerif = Literata({
  variable: "--bs-body-font-family",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const poppinsSans = Poppins({
  variable: "--bs-body-font-family",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

export const metadata = {
  title: {
    template: "%s :: Cronistas Su Periódico",
    default: "Cronistas Su Periódico",
  },
  description:
    "Estamos siempre a su disposición ... para trabajar de la mano con el departamento del Tolima!!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body cz-shortcut-listen="true">
        {/* Global Loader */}
        <Loading />

        {/* Header */}
        <header>
          <NavbarTop />
          <NavbarKit />
        </header>

        {/* Page content */}
        {children}

        {/* Footer */}
        <footer>
          <FooterMenu />
          <BottomBar />
        </footer>
      </body>
    </html>
  );
}
