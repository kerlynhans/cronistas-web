import Link from "next/link";
import SoyKoddy from "@/components/SoyKoddy/SoyKoddy";

const BottomBar = () => {
  return (
    <div className="bg__footer-bottom ">
      <div className="container">
        <div className="row flex-column-reverse flex-md-row">
          <div className="col-md-6">
            <span>
              © 2025{" "}
              <Link href="/" title="Página de inicio">
                Cronistas Su Periódico
              </Link>{" "}
              - Medio informativo de interés regional.
            </span>
          </div>
          <div className="col-md-6">
            <SoyKoddy />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BottomBar;
