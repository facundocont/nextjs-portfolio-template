import React from "react";
import { getProjectsSorted } from "@/config/projects.config";
import CardProject from "@/components/ui/cardProject";
import SectionContainer from "@/components/ui/sectionContainer";

function Projects() {
  const projects = getProjectsSorted();

  return (
    <SectionContainer
      id="proyectos"
      title="Proyectos"
      description="Aquí puedes encontrar una selección de mis proyectos más recientes."
    >
      <div
        className="flex flex-row justify-center items-start flex-wrap gap-4"
        role="list"
        aria-label="Lista de proyectos"
      >
        {projects.map((project) => (
          <div key={project.id} role="listitem">
            <CardProject project={project} />
          </div>
        ))}
      </div>
    </SectionContainer>
  );
}

export default Projects;
