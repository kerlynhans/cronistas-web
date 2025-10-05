import {
  Poppins,
  Playfair,
  Montserrat,
  Noto_Serif,
  Literata,
} from "next/font/google";
import Loading from "@/components/Loading/Loading";
import NavbarTop from "@/components/NavbarTop/NavbarTop";
import NavbarKit from "@/components/NavbatKit/NavbatKit";
import Footer from "@/components/Footer/Footer";

//styles
import "@fortawesome/fontawesome-svg-core/styles.css";
import "bootstrap/dist/css/bootstrap.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
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

const playfairSerif = Playfair({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const monserratSerif = Montserrat({
  variable: "--font-monserrat",
  subsets: ["latin"],
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

        {/* Top Navbar */}
        <header className="bg-light">
          <NavbarTop />
          <NavbarKit />
        </header>

        {/* Main page content */}
        {children}

        {/* Footer */}
        <section className="wrapper__section p-0">
          <div className="wrapper__section__components">
            <Footer />
          </div>
        </section>
      </body>
    </html>
  );
}
