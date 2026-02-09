import React from "react";
import { myData } from "@/config/myData.config";
import { sections } from "@/config/sections.config";
import BtnNavigation from "@/components/ui/btnNavigation";
import BtnScrollToTop from "@/components/ui/btnScrollToTop";
import Link from "next/link";

interface Props {
  enabledLinks?: boolean;
}

const Footer = React.memo(({ enabledLinks = true }: Props) => {
  const getCurrentYear = () => new Date().getFullYear();

  return (
    <footer
      className="bg-base-200 py-20 sm:py-28"
      role="contentinfo"
      aria-label="Información del sitio"
    >
      <div className="container mx-auto flex flex-col items-center gap-y-16 px-4">
        {enabledLinks && <BtnScrollToTop />}

        <nav aria-label="Enlaces de navegación del footer">
          <ul
            className={`grid gap-x-8 gap-y-4 justify-center items-center ${enabledLinks ? "grid-cols-2 sm:grid-cols-3" : "grid-cols-1"}`}
            role="list"
          >
            {enabledLinks ? (
              sections.map((section) => (
                <li
                  key={section.link}
                  className="flex items-center justify-center"
                  role="listitem"
                >
                  <BtnNavigation
                    section={section}
                    className="btn btn-ghost w-28 text-primary hover:text-primary-focus focus:ring-2 focus:ring-primary focus:ring-offset-2"
                  />
                </li>
              ))
            ) : (
              <li className="flex items-center justify-center">
                <a
                  href="/"
                  className="btn btn-ghost w-28 text-primary hover:text-primary-focus focus:ring-2 focus:ring-primary focus:ring-offset-2"
                  aria-label="Ir al inicio"
                >
                  Inicio
                </a>
              </li>
            )}
          </ul>
        </nav>

        <div
          className="flex flex-col items-center gap-4 text-center"
          role="complementary"
          aria-label="Métricas de rendimiento"
        >
          <div className="flex flex-col gap-4">
            <div>
              <h3 className="text-sm font-semibold text-base-content/80">
                Puntuación en PageSpeed Insights
              </h3>
              <p className="text-[10px] text-base-content/50">
                Rendimiento · Accesibilidad · Buenas prácticas · SEO
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-x-8 gap-y-4 text-xs">
              <div className="flex flex-col gap-1">
                <span className="font-medium text-base-content/70">Móvil</span>

                <span className="text-base-content/60 font-semibold">
                  98-100-100-100
                </span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="font-medium text-base-content/70">
                  Escritorio
                </span>

                <span className="text-base-content/60 font-semibold">
                  100-100-100-100
                </span>
              </div>
            </div>
          </div>
          <Link
            href="https://github.com/facundocont/nextjs-portfolio-template"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-primary hover:text-primary-focus underline focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded px-3 py-1.5 transition-colors"
            aria-label="Ver repositorio en GitHub"
          >
            Código abierto - Usalo para tu portfolio
          </Link>
        </div>

        <div
          className="flex flex-col gap-2 select-none"
          role="complementary"
          aria-label="Información de derechos de autor"
        >
          <p className="text-sm text-center">
            <span aria-label={`Copyright ${getCurrentYear()}`}>
              &copy; {getCurrentYear()}
            </span>{" "}
            - {myData.name}
          </p>
          <p className="text-sm text-center">
            Desarrollado con{" "}
            <span aria-label="café" role="img">
              ☕
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
});

Footer.displayName = "Footer";

export default Footer;
