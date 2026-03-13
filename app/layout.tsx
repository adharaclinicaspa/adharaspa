import type { Metadata } from "next";
import "./globals.css";
import { TopBanner } from "./components/ui/TopBanner";

export const metadata: Metadata = {
  title: "Adhara Clínica Spa – Micropigmentación y Tratamientos Estéticos de Lujo en CDMX",
  description:
    "Micropigmentación profesional, tratamientos faciales y corporales con tecnología de última generación. Valoración gratuita. Zona Lindavista, Ciudad de México.",
  keywords: [
    "micropigmentación CDMX", "clínica estética México City", "tratamientos faciales lujo",
    "depilación láser", "spa Lindavista", "cejas micropigmentación",
  ],
  openGraph: {
    title: "Adhara Clínica Spa – Micropigmentación y Tratamientos Estéticos de Lujo",
    description:
      "Micropigmentación profesional, tratamientos faciales y corporales con tecnología de última generación. Valoración gratuita. Zona Lindavista, CDMX.",
    locale: "es_MX",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Pinyon+Script&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Adhara Clínica Spa",
              description:
                "Clínica de estética de lujo especializada en micropigmentación, tratamientos faciales y corporales.",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Lindavista",
                addressRegion: "Ciudad de México",
                addressCountry: "MX",
              },
              telephone: "+525612979701",
              priceRange: "$$$",
            }),
          }}
        />
      </head>
      <body>
        <TopBanner />
        {children}
      </body>
    </html>
  );
}
