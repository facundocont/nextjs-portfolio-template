import React from "react";
import { syne } from "@/fonts/fonts";

interface SectionHeaderProps {
  id: string;
  title: string;
  description?: string;
}

export default function SectionHeader({
  id,
  title,
  description,
}: SectionHeaderProps) {
  return (
    <header className="mx-auto max-w-2xl text-center" id={id}>
      <h2
        id={`${id}-heading`}
        className={`text-4xl font-bold tracking-tight text-balance sm:text-5xl ${syne.className}`}
      >
        {title}
      </h2>
      {description && <p className="mt-2 text-lg/8">{description}</p>}
    </header>
  );
}
