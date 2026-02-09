import dynamic from "next/dynamic";
import Hero from "@/components/hero";
import Navbar from "@/components/ui/navbar";
import Footer from "@/components/ui/footer";
import ThemeController from "@/components/ui/themeController";
import { myData } from "@/config/myData.config";

// Cargar componentes pesados de forma lazy
const AboutMe = dynamic(() => import("@/components/about"), {
  loading: () => <div className="h-96 bg-base-200 animate-pulse rounded-lg" />,
});

const Projects = dynamic(() => import("@/components/projects"), {
  loading: () => <div className="h-96 bg-base-200 animate-pulse rounded-lg" />,
});

const Experience = dynamic(() => import("@/components/experience"), {
  loading: () => <div className="h-96 bg-base-200 animate-pulse rounded-lg" />,
});

const Techs = dynamic(() => import("@/components/techs"), {
  loading: () => <div className="h-96 bg-base-200 animate-pulse rounded-lg" />,
});

const Studies = dynamic(() => import("@/components/studies"), {
  loading: () => <div className="h-96 bg-base-200 animate-pulse rounded-lg" />,
});

const Contact = dynamic(() => import("@/components/contact"), {
  loading: () => <div className="h-64 bg-base-200 animate-pulse rounded-lg" />,
});

export default function Home() {
  return (
    <main className="min-h-screen w-full overflow-hidden">
      <h1 className="sr-only">
        {myData.name} - {myData.professional.mainRole} | Portfolio Profesional
      </h1>
      <Navbar />
      <div className="pt-16">
        <Hero />
        <AboutMe />
        <Projects />
        <Experience />
        <Techs />
        <Studies />
        <Contact />
      </div>
      <Footer />

      <ThemeController className="fixed bottom-4 right-4" />
    </main>
  );
}
