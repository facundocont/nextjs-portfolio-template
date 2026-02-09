import React from "react";
import SocialLinks from "@/components/ui/socialLinks";
import ContactForm from "@/components/ui/contactForm";
import SectionContainer from "@/components/ui/sectionContainer";

interface Props {
  enabledForm?: boolean;
}

export default function Contact({ enabledForm = false }: Props) {
  return (
    <SectionContainer
      id="contacto"
      title="Contacto"
      description="Si tenés alguna pregunta o querés colaborar en un proyecto, no dudes
          en contactarme. Estoy disponible para consultas profesionales."
    >
      <SocialLinks />
      {enabledForm ? (
        <ContactForm />
      ) : (
        <a
          href="/contact"
          className="btn btn-secondary mx-auto"
          aria-label="Ir a la página de contacto"
        >
          Contáctame
        </a>
      )}
    </SectionContainer>
  );
}
