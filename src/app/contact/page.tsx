import { Metadata } from "next";
import dynamic from "next/dynamic";
import Script from "next/script";
import Footer from "@/components/ui/footer";
import NavbarContact from "@/components/ui/navbarContact";
import { configWeb } from "@/config/configWeb.config";
import ThemeController from "@/components/ui/themeController";

export const metadata: Metadata = {
  title: configWeb.titleWebContact,
  description: configWeb.descriptionWebContact,
};

const Contact = dynamic(() => import("@/components/contact"), {
  loading: () => <div className="h-32 bg-base-200 animate-pulse rounded-lg" />,
});

export default function ContactPage() {
  return (
    <main className="min-h-screen w-full overflow-hidden">
      <Script
        strategy="beforeInteractive"
        src={`https://www.google.com/recaptcha/api.js?render=${process.env.NEXT_PUBLIC_CAPTCHA_SITE_KEY}`}
      />
      <NavbarContact />
      <div className="w-full overflow-hidden pt-16">
        <Contact enabledForm={true} />
      </div>
      <Footer enabledLinks={false} />

      <ThemeController className="fixed bottom-22 right-4" />
    </main>
  );
}
