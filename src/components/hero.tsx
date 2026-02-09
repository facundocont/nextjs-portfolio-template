/* eslint-disable @next/next/no-img-element */
import { myData } from "@/config/myData.config";
import { projects } from "@/config/projects.config";
import CtaButtonHero from "@/components/ui/ctaButtonHero";
import { syne } from "@/fonts/fonts";
import SocialLinks from "@/components/ui/socialLinks";

export default function Hero() {
  const calculateExperienceYears = (startDate: Date) => {
    const start = new Date(startDate);
    const now = new Date();
    const years = now.getFullYear() - start.getFullYear();
    return years > 0 ? years : 0;
  };

  const experienceYears = calculateExperienceYears(myData.workStartDate);
  const projectCount = projects.length;

  return (
    <section
      className="flex py-20 px-4 sm:px-8 max-w-7xl mx-auto w-full gap-8"
      role="banner"
    >
      <div className="flex flex-col flex-1 h-full justify-center items-start max-w-2xl">
        <p className="font-medium">¡Bienvenidos! Mi nombre es</p>

        <h1
          className={`text-primary text-4xl md:text-6xl font-bold mt-4 ${syne.className}`}
          style={{ fontSize: "clamp(2.25rem, 4vw, 3.75rem)" }}
        >
          {myData.name}
          <span className="block text-2xl md:text-3xl text-base-content mt-2">
            {myData.professional.mainRole}
          </span>
        </h1>

        <p className="text-lg mt-6 leading-relaxed mb-4">
          {myData.description}
        </p>

        <div className="flex flex-wrap items-center gap-x-10 gap-y-8 mt-8">
          <SocialLinks />
          <CtaButtonHero />
        </div>

        <div
          className={`flex items-center gap-x-8 mt-12 ${syne.className}`}
          role="region"
          aria-label="Estadísticas profesionales"
        >
          <div className="flex flex-col">
            <span
              className="text-3xl font-medium"
              aria-label={`${experienceYears} años de experiencia`}
            >
              {`+${experienceYears}`}
            </span>
            <span className="text-sm">{`${
              experienceYears > 1 ? "Años" : "Año"
            } de experiencia`}</span>
          </div>
          <div className="flex flex-col">
            <span
              className="text-3xl font-medium"
              aria-label={`${projectCount} proyectos completados`}
            >
              {projectCount}
            </span>
            <span className="text-sm">{`${
              projectCount > 1 ? "Proyectos lanzados" : "Proyecto lanzado"
            }`}</span>
          </div>
          <div className="flex flex-col">
            <span
              className="text-3xl font-medium"
              aria-label="100% de clientes satisfechos"
            >
              100%
            </span>
            <span className="text-sm">Clientes satisfechos</span>
          </div>
        </div>
      </div>

      <div className="hidden md:flex items-start justify-center flex-1">
        <div className="relative">
          <div
            className="absolute inset-0 bg-primary/30 blur-3xl rounded-full"
            aria-hidden="true"
          ></div>
          <img
            src="hero-image.svg"
            alt={`Ilustración de ${myData.name}, ${myData.professional.mainRole}`}
            className="relative w-full max-w-xl pt-20"
            width={805}
            height={745}
            loading="eager"
            decoding="async"
            fetchPriority="high"
          />
        </div>
      </div>
    </section>
  );
}
