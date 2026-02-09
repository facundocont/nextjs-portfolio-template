"use client";

import React from "react";
import { scrollToSection } from "@/utils/scrollToSection";

function CtaButtonHero() {
  const handleClick = () => {
    scrollToSection("#proyectos");
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      handleClick();
    }
  };

  return (
    <button
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      className="btn btn-secondary"
      aria-label="Navegar a la sección de proyectos"
      type="button"
    >
      Ver proyectos{" "}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="28.45"
        height="16"
        viewBox="0 0 16 9"
        aria-hidden="true"
        focusable="false"
      >
        <path
          fill="currentColor"
          d="M12.5 5h-9c-.28 0-.5-.22-.5-.5s.22-.5.5-.5h9c.28 0 .5.22.5.5s-.22.5-.5.5"
        />
        <path
          fill="currentColor"
          d="M10 8.5a.47.47 0 0 1-.35-.15c-.2-.2-.2-.51 0-.71l3.15-3.15l-3.15-3.15c-.2-.2-.2-.51 0-.71s.51-.2.71 0l3.5 3.5c.2.2.2.51 0 .71l-3.5 3.5c-.1.1-.23.15-.35.15Z"
        />
      </svg>
    </button>
  );
}

export default CtaButtonHero;
