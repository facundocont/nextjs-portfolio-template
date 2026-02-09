import React from "react";
import InfinityBrand from "@/components/ui/infinityBrand";
import SectionContainer from "@/components/ui/sectionContainer";

function Techs() {
  return (
    <SectionContainer id="tecnologias" title="Tecnologías">
      <div
        className="flex flex-row justify-center items-start flex-wrap gap-4"
        aria-label="Lista de Tecnologías"
      >
        <InfinityBrand />
      </div>
    </SectionContainer>
  );
}

export default Techs;
