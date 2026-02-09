import React from "react";
import { jobExperiences } from "@/config/experience.config";
import CardExperience from "@/components/ui/cardExperience";
import SectionContainer from "@/components/ui/sectionContainer";

function Experience() {
  return (
    <SectionContainer id="experiencia" title="Experiencia">
      <div
        className="flex flex-row justify-center items-start flex-wrap gap-4"
        role="list"
      >
        {jobExperiences.map((job) => (
          <CardExperience key={job.id} job={job} />
        ))}
      </div>
    </SectionContainer>
  );
}

export default Experience;
