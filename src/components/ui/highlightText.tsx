import React from "react";
import { syne } from "@/fonts/fonts";

interface HighlightTextProps {
  children: string;
}

export default function HighlightText({ children }: HighlightTextProps) {
  // Divide el texto usando **texto** como marcador
  const parts = children.split(/(\*\*.*?\*\*)/g);

  return (
    <>
      {parts.map((part, index) => {
        // Si el fragmento está entre **
        if (part.startsWith("**") && part.endsWith("**")) {
          const text = part.slice(2, -2); // Quita los **
          return (
            <strong
              key={index}
              className={`font-bold underline underline-offset-4 ${syne.className}`}
            >
              {text}
            </strong>
          );
        }
        return <React.Fragment key={index}>{part}</React.Fragment>;
      })}
    </>
  );
}
