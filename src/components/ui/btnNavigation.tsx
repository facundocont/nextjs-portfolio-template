"use client";

import React, { useCallback } from "react";
import { scrollToSection } from "@/utils/scrollToSection";
import { Section } from "@/config/sections.config";

interface Props {
  section: Section;
  className?: string;
  text?: string;
  role?: string;
}

const BtnNavigation = React.memo(
  ({ section, className, text, role }: Props) => {
    const handleDropdownClick = useCallback((link: string) => {
      scrollToSection(link);
      const activeElement = document.activeElement as HTMLElement;
      if (activeElement) {
        activeElement.blur();
      }
    }, []);

    return (
      <button
        onClick={() => handleDropdownClick(section.link)}
        className={className}
        aria-label={`Navegar a la sección ${section.name}`}
        type="button"
        role={role}
      >
        {text || section.name}
      </button>
    );
  },
);

BtnNavigation.displayName = "BtnNavigation";

export default BtnNavigation;
