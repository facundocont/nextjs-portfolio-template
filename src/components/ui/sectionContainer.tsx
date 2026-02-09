import React from "react";
import SectionHeader from "@/components/ui/sectionHeader";

interface SectionContainerProps {
  id: string;
  title: string;
  description?: string;
  className?: string;
  children?: React.ReactNode;
}

function SectionContainer({
  id,
  title,
  description,
  className = "",
  children,
}: SectionContainerProps) {
  return (
    <section
      className={`px-6 py-20 sm:py-28 lg:px-8 max-w-7xl mx-auto flex flex-col gap-12 ${className}`}
      aria-labelledby={`${id}-heading`}
    >
      <SectionHeader id={id} title={title} description={description} />
      {children}
    </section>
  );
}

export default SectionContainer;
