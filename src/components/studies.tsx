import React, { useMemo } from "react";
import {
  principalStudies,
  complementaryStudies,
} from "@/config/studies.config";
import TimelineStudies from "@/components/ui/timelineStudies";
import { syne } from "@/fonts/fonts";
import SectionContainer from "@/components/ui/sectionContainer";

function Studies() {
  const principalStudiesSorted = useMemo(() => {
    return [...principalStudies].sort((a, b) => {
      return b.endDate.getTime() - a.endDate.getTime();
    });
  }, []);

  const complementaryStudiesSorted = useMemo(() => {
    return [...complementaryStudies].sort((a, b) => {
      return b.endDate.getTime() - a.endDate.getTime();
    });
  }, []);

  return (
    <SectionContainer id="estudios" title="Estudios">
      <TimelineStudies
        studies={principalStudiesSorted}
        ariaLabel="Estudios principales"
      />
      <div className="flex flex-col gap-12 mt-4">
        <h3
          className={`text-2xl font-semibold tracking-tight text-balance text-center sm:text-3xl ${syne.className}`}
          id="estudios-complementarios-heading"
        >
          Estudios Complementarios
        </h3>
        <TimelineStudies
          studies={complementaryStudiesSorted}
          ariaLabel="Estudios complementarios"
        />
      </div>
    </SectionContainer>
  );
}

export default Studies;
