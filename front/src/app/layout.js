import { Poppins, Playfair, Montserrat } from "next/font/google";
import Loading from "@/components/Loading/Loading";
import NavbarTop from "@/components/NavbarTop/NavbarTop";
import NavbarKit from "@/components/NavbatKit/NavbatKit";

// font awesome styles
import "@fortawesome/fontawesome-svg-core/styles.css";
import "bootstrap/dist/css/bootstrap.css";
import "@/styles/main.scss";

// font awesome styles
import "@fortawesome/fontawesome-svg-core/styles.css";

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
  title: { template: "%s :: Cronistas", default: "Cronistas - su periódico" },
  description:
    "Estamos siempre a su disposición ... para trabajar de la mano con el departamento del Tolima!!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body cz-shortcut-listen="true">
        {/* Global Loader 
        <Loading />
        */}

        <header className="bg-light">
          {/* Top Navbar */}
          <NavbarTop />

          {/* Menu Navbar */}
          <NavbarKit />
        </header>
        {children}
      </body>
    </html>
  );
}
