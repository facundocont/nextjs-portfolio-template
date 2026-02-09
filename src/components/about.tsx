import React from "react";
import { aboutMe } from "@/config/aboutMe.config";
import HighlightText from "@/components/ui/highlightText";
import SectionContainer from "@/components/ui/sectionContainer";

function About() {
  return (
    <SectionContainer id="sobre-mi" title="Sobre mí">
      <div
        className="flex flex-col justify-center items-center gap-4  max-w-4xl mx-auto"
        aria-label="Biografía del desarrollador"
      >
        {aboutMe.bio.map((paragraph, index) => (
          <p key={index} className="text-lg leading-relaxed text-center">
            <HighlightText>{paragraph}</HighlightText>
          </p>
        ))}
      </div>
    </SectionContainer>
  );
}

export default About;
