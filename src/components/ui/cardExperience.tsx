import React from "react";
import { JobExperience } from "@/config/experience.config";
import { dateToString } from "@/utils/dateToString";
import ContainerTechTags from "@/components/ui/containerTechTags";
import { syne } from "@/fonts/fonts";

interface Props {
  job: JobExperience;
}

function CardExperience({ job }: Props) {
  return (
    <div role="listitem">
      <article className="card bg-base-200 w-full max-w-md hover:shadow-2xl transition-shadow duration-300">
        <div className="card-body items-center text-center">
          <header>
            <h3 className={`card-title text-2xl ${syne.className}`}>
              {job.title}
            </h3>
            <p
              className="badge badge-info mt-2"
              aria-label={`Nombre de la empresa ${job.company}`}
            >
              {job.company}
            </p>
          </header>

          <time
            className="font-mono italic capitalize"
            dateTime={job.startDate.toISOString()}
          >
            {`${dateToString(job.startDate)} - ${
              job.currentJob ? "Presente" : dateToString(job.endDate)
            }`}
          </time>

          <section aria-labelledby={`descripcion-${job.id}`}>
            <h4
              id={`descripcion-${job.id}`}
              className="font-semibold underline underline-offset-2"
            >
              Descripción:
            </h4>
            <p>{job.description}</p>
          </section>

          <section aria-labelledby={`tareas-${job.id}`}>
            <h4
              id={`tareas-${job.id}`}
              className="font-semibold underline underline-offset-2"
            >
              Tareas:
            </h4>
            <ul className="list-disc list-inside">
              {job.tasks.map((task, index) => (
                <li key={index}>{task}</li>
              ))}
            </ul>
          </section>

          {job.technologies && (
            <footer className="card-actions justify-end mt-4">
              <ContainerTechTags tags={job.technologies} />
            </footer>
          )}
        </div>
      </article>
    </div>
  );
}

export default CardExperience;
