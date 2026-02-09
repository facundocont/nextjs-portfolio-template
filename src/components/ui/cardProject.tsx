/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useCallback, useEffect, useRef } from "react";
import { Project } from "@/config/projects.config";
import { dateToString } from "@/utils/dateToString";
import ContainerTechTags from "@/components/ui/containerTechTags";
import { syne } from "@/fonts/fonts";

interface Props {
  project: Project;
}

function CardProject({ project }: Props) {
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const modalRef = useRef<HTMLDialogElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  const openModal = useCallback(() => {
    setIsModalOpen(true);
    modalRef.current?.showModal();
    // Enfocar el botón de cerrar para accesibilidad
    setTimeout(() => closeButtonRef.current?.focus(), 100);
  }, []);

  const closeModal = useCallback(() => {
    setIsModalOpen(false);
    modalRef.current?.close();
  }, []);

  // Manejo de tecla Escape
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape" && isModalOpen) {
        closeModal();
      }
    };

    if (isModalOpen) {
      document.addEventListener("keydown", handleKeyDown);
      // Prevenir scroll del body cuando el modal está abierto
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [isModalOpen, closeModal]);

  // Función para optimizar URLs de Cloudinary
  const optimizeCloudinaryUrl = (
    url: string,
    width: number,
    height: number,
  ) => {
    if (url.includes("cloudinary.com")) {
      // Insertar parámetros de transformación después de /upload/
      return url.replace(
        "/upload/",
        `/upload/w_${width},h_${height},c_fill,f_auto,q_auto/`,
      );
    }
    return url;
  };

  const modalId = `modal-project-${project.id}`;
  const imageAlt = `Captura de pantalla del proyecto ${project.title}`;

  const statusConfig = {
    production: {
      label: "En producción",
      color: "status-success",
      animate: true,
    },
    development: {
      label: "En desarrollo",
      color: "status-warning",
      animate: false,
    },
    archived: {
      label: "Archivado",
      color: "status-error",
      animate: false,
    },
  };

  const currentStatus = statusConfig[project.status];

  return (
    <article className="card max-w-96 shadow-sm group w-full bg-base-200 overflow-hidden">
      <figure className="aspect-4/3 overflow-hidden border-b-2 border-base-200">
        <img
          src={optimizeCloudinaryUrl(project.imageUrl, 384, 286)}
          alt={imageAlt}
          className={`w-full h-full object-cover transition-transform duration-300 ${
            !isModalOpen ? "group-hover:scale-105" : "group-hover:scale-100"
          }`}
          width="384"
          height="286"
          loading="lazy"
        />
      </figure>
      <div className="card-body gap-3">
        <header>
          <h3 className="card-title">
            <button
              className={`cursor-pointer hover:underline hover:underline-offset-4 text-lg text-left ${syne.className}`}
              onClick={openModal}
              aria-describedby={`desc-${project.id}`}
              type="button"
            >
              {project.title}
            </button>
          </h3>
        </header>
        <p id={`desc-${project.id}`} className="line-clamp-3">
          {project.description}
        </p>
        {project.tags && (
          <div role="group" className="my-2">
            <ContainerTechTags tags={project.tags} />
          </div>
        )}
        <div
          className={`card-actions items-center ${project.status === "production" ? "justify-between" : "justify-end"}`}
        >
          {project.status === "production" && (
            <div className="flex flex-row items-center justify-center gap-2">
              <div className="inline-grid *:[grid-area:1/1]">
                <div
                  className={`status ${currentStatus.color} animate-ping`}
                ></div>
                <div className={`status ${currentStatus.color}`}></div>
              </div>
              <span className="text-sm font-light">{currentStatus.label}</span>
            </div>
          )}
          <button
            className="btn btn-accent"
            onClick={openModal}
            aria-label={`Ver más detalles sobre ${project.title}`}
            type="button"
          >
            Ver más
          </button>
        </div>
      </div>

      <dialog
        id={modalId}
        className="modal"
        ref={modalRef}
        aria-labelledby={`modal-title-${project.id}`}
        aria-describedby={`modal-desc-${project.id}`}
        role="dialog"
        aria-modal="true"
      >
        <div
          className="modal-box max-h-[calc(100vh-8rem)] px-4 py-6 sm:px-6"
          role="document"
        >
          <header className="flex justify-between items-start mb-2 gap-2">
            <h3
              id={`modal-title-${project.id}`}
              className={`font-bold text-lg ${syne.className}`}
            >
              {project.title}
            </h3>
            <form method="dialog">
              <button
                ref={closeButtonRef}
                className="btn btn-sm btn-circle  size-7"
                onClick={closeModal}
                aria-label="Cerrar modal"
                type="button"
              >
                ✕
              </button>
            </form>
          </header>

          <div className="flex flex-col gap-2 mb-4">
            <div className="flex flex-wrap gap--x-4 gap-y-2 justify-between items-center">
              <time className="text-sm italic font-extralight capitalize">
                <span className="sr-only">Período del proyecto: </span>
                {dateToString(project.startDate)} -{" "}
                {dateToString(project.endDate)}
              </time>
              <div className="flex flex-row items-center justify-start gap-2">
                <div className="inline-grid *:[grid-area:1/1]">
                  {currentStatus.animate && (
                    <div
                      className={`status ${currentStatus.color} animate-ping`}
                    ></div>
                  )}
                  <div className={`status ${currentStatus.color}`}></div>
                </div>
                <span className="text-sm font-light">
                  {currentStatus.label}
                </span>
              </div>
            </div>
            <p id={`modal-desc-${project.id}`}>{project.description}</p>
          </div>

          {project.tags && (
            <div
              role="group"
              aria-label="Tecnologías utilizadas en el proyecto"
            >
              <ContainerTechTags tags={project.tags} />
            </div>
          )}

          <figure className="aspect-4/3 rounded-2xl overflow-hidden mt-4">
            <img
              src={optimizeCloudinaryUrl(project.imageUrl, 384, 288)}
              alt={`Vista detallada del proyecto ${project.title}`}
              className="w-full h-full object-cover"
              width="384"
              height="288"
              loading="lazy"
            />
          </figure>

          <nav
            className="flex flex-wrap gap-4 justify-end mt-4"
            aria-label="Enlaces del proyecto"
          >
            {project.repoUrl && (
              <a
                href={project.repoUrl}
                className="btn btn-secondary"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Ver código fuente de ${project.title} en repositorio`}
              >
                Ir al repositorio
              </a>
            )}
            {project.websiteUrl && (
              <a
                href={project.websiteUrl}
                className="btn btn-info"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visitar sitio web del proyecto ${project.title}`}
              >
                Visitar sitio
              </a>
            )}
          </nav>
        </div>

        <form method="dialog" className="modal-backdrop">
          <button onClick={closeModal} aria-label="Cerrar modal" type="submit">
            Cerrar
          </button>
        </form>
      </dialog>
    </article>
  );
}

export default CardProject;
