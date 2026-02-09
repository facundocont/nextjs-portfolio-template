import React from "react";
import { Study } from "@/config/studies.config";
import CardStudy from "@/components/ui/cardStudy";

interface Props {
  studies: Study[];
  ariaLabel?: string;
}

function TimelineStudies({ studies, ariaLabel }: Props) {
  return (
    <div className="flex flex-row justify-center items-start flex-wrap gap-4 ">
      <ul
        className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical"
        role="list"
        aria-label={ariaLabel || "Lista de estudios"}
      >
        {studies.map((study, index) => (
          <CardStudy
            key={study.id}
            study={study}
            index={index}
            isLastItem={index === studies.length - 1}
          />
        ))}
      </ul>
    </div>
  );
}

export default TimelineStudies;
