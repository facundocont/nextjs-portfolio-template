import React from "react";
import { Section } from "@/config/sections.config";
import { myData } from "@/config/myData.config";
import { sections } from "@/config/sections.config";
import BtnNavigation from "@/components/ui/btnNavigation";
import { syne } from "@/fonts/fonts";

function Navbar() {
  const homeSection: Section = { name: "Inicio", link: "#inicio" };
  return (
    <header role="banner" id="inicio">
      <nav
        className="navbar bg-base-200 shadow-sm h-18 fixed top-0 left-0 right-0 z-50"
        aria-label="Navegación principal"
        role="navigation"
      >
        <div className="navbar-start w-3/12">
          <BtnNavigation
            section={homeSection}
            className={`btn btn-ghost btn-primary text-xl ${syne.className}`}
            text={myData.name}
          />
        </div>
        <div className="navbar-end w-9/12">
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-outline btn-primary navbar-screen:hidden"
              aria-label="Abrir menú de navegación"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-200 rounded-b-box z-1000 mt-4 w-52 p-2 border border-b-primary border-x-primary border-t-0"
              role="menu"
              aria-label="Menú de navegación móvil"
            >
              {sections.map((section) => (
                <li key={section.link} role="none">
                  <BtnNavigation
                    section={section}
                    className="focus:bg-primary focus:text-primary-content"
                  />
                </li>
              ))}
            </ul>
          </div>
          <ul
            className="menu menu-horizontal gap-1 hidden navbar-screen:flex"
            role="menubar"
            aria-label="Menú de navegación principal"
          >
            {sections.map((section) => (
              <li key={section.link} role="none">
                <BtnNavigation
                  section={section}
                  className="btn btn-ghost btn-primary focus:bg-primary focus:text-primary-content"
                  role="menuitem"
                />
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
