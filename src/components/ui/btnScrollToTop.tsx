"use client";

import React from "react";
import { scrollToSection } from "@/utils/scrollToSection";

function BtnScrollToTop() {
  const handleScrollToTop = () => {
    scrollToSection("inicio");
  };
  return (
    <button
      onClick={handleScrollToTop}
      className="btn btn-primary btn-circle btn-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
      aria-label="Volver al inicio de la página"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M5 10l7-7m0 0l7 7m-7-7v18"
        />
      </svg>
    </button>
  );
}

export default BtnScrollToTop;
