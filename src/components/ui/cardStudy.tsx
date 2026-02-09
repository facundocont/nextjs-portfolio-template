import React from "react";
import { Study } from "@/config/studies.config";
import { dateToString } from "@/utils/dateToString";
import { syne } from "@/fonts/fonts";

interface Props {
  study: Study;
  index: number;
  isLastItem: boolean;
}

function CardStudy({ study, index, isLastItem }: Props) {
  const getBadgeEstado = (estado: string) => {
    switch (estado) {
      case "finalizado":
        return "badge-success";
      case "en curso":
        return "badge-warning";
      case "pendiente":
        return "badge-secondary";
      default:
        return "badge-secondary";
    }
  };

  const badgeEstado = getBadgeEstado(study.status);
  const startDateISO = study.startDate.toISOString().split("T")[0];
  const endDateISO = study.endDate.toISOString().split("T")[0];

  return (
    <li role="listitem">
      {index !== 0 && <hr className="bg-secondary" />}
      <div className="timeline-middle">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="h-10 w-10 text-secondary"
          aria-hidden="true"
          role="img"
        >
          <path
            fillRule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
            clipRule="evenodd"
          />
        </svg>
      </div>
      <div
        className={
          index % 2 === 0
            ? "timeline-start mb-10 md:text-end"
            : "timeline-end md:mb-10"
        }
      >
        <article className="card bg-base-200 w-full max-w-96">
          <div className="card-body items-center text-center">
            <h3 className={`card-title ${syne.className}`}>{study.title}</h3>
            <h4 className="italic">{study.institution}</h4>
            <time
              className="font-mono italic capitalize"
              dateTime={`${startDateISO}/${endDateISO}`}
            >
              {`${dateToString(study.startDate)} - ${
                study.status === "en curso"
                  ? "..."
                  : dateToString(study.endDate)
              }`}
            </time>
            <p className="capitalize">
              Estado:{" "}
              <span
                className={`ml-1 badge ${badgeEstado}`}
                role="status"
                aria-label={`Estado del estudio: ${study.status}`}
              >
                {study.status}
              </span>
            </p>
            <p>{study.description}</p>
            <div className="card-actions justify-end">
              {study.certificateUrl && (
                <a
                  href={study.certificateUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-link"
                  aria-label={`Ver certificado de ${study.title} (se abre en nueva ventana)`}
                >
                  Ver certificado
                  <span className="sr-only"> (enlace externo)</span>
                </a>
              )}
            </div>
          </div>
        </article>
      </div>
      {!isLastItem && <hr className="bg-secondary" />}
    </li>
  );
}

export default CardStudy;
