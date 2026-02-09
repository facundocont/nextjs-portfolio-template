import React from "react";
import { Section } from "@/config/sections.config";
import { myData } from "@/config/myData.config";
import { syne } from "@/fonts/fonts";

function NavbarContact() {
  const homeSection: Section = { name: "Inicio", link: "/" };
  return (
    <header role="banner" id="inicio">
      <nav
        className="navbar bg-base-200 shadow-sm h-18 fixed top-0 left-0 right-0 z-50"
        aria-label="Navegación principal"
        role="navigation"
      >
        <div className="navbar-center w-full">
          <a
            href={homeSection.link}
            className={`btn btn-ghost btn-primary text-xl mx-auto ${syne.className}`}
            aria-label={`Navegar a la página ${homeSection.name}`}
            type="button"
          >
            {myData.name}
          </a>
        </div>
      </nav>
    </header>
  );
}

export default NavbarContact;
