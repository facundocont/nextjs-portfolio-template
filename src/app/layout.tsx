import type { Metadata } from "next";
import "./globals.css";
import { myData } from "@/config/myData.config";
import { configWeb } from "@/config/configWeb.config";
import { mulish } from "@/fonts/fonts";
import JsonLd from "@/config/schema.config";

export const metadata: Metadata = {
  metadataBase: new URL(configWeb.urlWeb),
  alternates: {
    canonical: "/",
  },
  title: {
    default: configWeb.titleWeb,
    template: configWeb.titleTemplate,
  },
  description: configWeb.descriptionWeb,
  keywords: configWeb.keywordsWeb,
  authors: [{ name: myData.name, url: configWeb.urlWeb }],
  creator: myData.name,
  icons: {
    icon: configWeb.iconRoute,
    apple: configWeb.iconRoute,
  },
  openGraph: {
    title: configWeb.titleWeb,
    description: configWeb.descriptionWeb,
    type: "website",
    url: configWeb.urlWeb,
    siteName: configWeb.titleWeb,
    locale: configWeb.locale,
    images: [
      {
        url: configWeb.imageShareRoute,
        width: 1200,
        height: 630,
        alt: configWeb.titleWeb,
        type: configWeb.typeImageShare,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: configWeb.titleWeb,
    description: configWeb.descriptionWeb,
    images: [
      {
        url: configWeb.imageShareRoute,
        alt: configWeb.titleWeb,
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang={configWeb.lang} suppressHydrationWarning>
      <head>
        <JsonLd type="person" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('portfolio-theme-preference') || 'dim';
                  document.documentElement.setAttribute('data-theme', theme);
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body
        className={`grid-rows-[auto 1fr auto] grid min-h-screen ${mulish.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
