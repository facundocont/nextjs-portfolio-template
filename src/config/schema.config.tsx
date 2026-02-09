import Script from "next/script";
import { myData } from "@/config/myData.config";
import { configWeb } from "@/config/configWeb.config";

interface JsonLdProps {
  type?: "person" | "webpage";
}

export default function JsonLd({ type = "person" }: JsonLdProps) {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: myData.name,
    jobTitle: myData.professional.jobTitle,
    description: myData.professional.description,

    knowsAbout: [
      ...myData.professional.specializations,
      ...myData.professional.primaryTech,
    ],

    hasCredential: myData.professional.credentials.map((cred) => ({
      "@type": "EducationalOccupationalCredential",
      name: cred.title,
      ...(cred.institution && { credentialCategory: cred.institution }),
    })),

    email: myData.email,

    sameAs: [
      myData.linkedin,
      myData.github,
      myData.socialProfiles?.portfolio,
    ].filter(Boolean),

    url: configWeb.urlWeb,

    image: `${configWeb.urlWeb}${configWeb.imageShareRoute}`,
  };

  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: configWeb.titleWeb,
    description: configWeb.descriptionWeb,
    url: configWeb.urlWeb,
    author: {
      "@type": "Person",
      name: myData.name,
      url: configWeb.urlWeb,
    },
    inLanguage: configWeb.lang,
  };

  const schema = type === "person" ? personSchema : webPageSchema;

  return (
    <Script
      id={`schema-${type}`}
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      strategy="beforeInteractive"
    />
  );
}
