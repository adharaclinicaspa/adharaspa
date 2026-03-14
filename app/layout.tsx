import type { Metadata } from "next";
import "./globals.css";
import { TopBanner } from "./components/ui/TopBanner";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";

export const metadata: Metadata = {
  metadataBase: new URL('https://adharaspa.com'),
  title: {
    default: "Adhara Clínica Spa | Micropigmentación de Lujo y Skin Clinic en CDMX",
    template: "%s | Adhara Clínica Spa"
  },
  description:
    "Especialistas en Micropigmentación avanzada, faciales clínicos y protocolos de alta gama con tecnología de vanguardia. Resultados reales para tu belleza natural en CDMX.",
  keywords: [
    "micropigmentación CDMX", "clínica Lindavista", "tratamientos faciales de lujo México",
    "depilación láser profesional", "spa de lujo CDMX", "cejas powder brows México",
    "rejuvenecimiento facial avanzado", "Skin Clinic CDMX", "Adhara Clínica Spa"
  ],
  openGraph: {
    title: "Adhara Clínica Spa | Micropigmentación y Skin Clinic de Lujo",
    description:
      "Descubre el arte del cuidado consciente. Micropigmentación, faciales y tecnología de alta gama en Ciudad de México.",
    url: "https://adharaspa.com",
    siteName: "Adhara Clínica Spa",
    images: [
      {
        url: "/adhara-og.jpeg",
        width: 1200,
        height: 630,
        alt: "Adhara Clínica Spa - El Arte del Cuidado Consciente",
      },
    ],
    locale: "es_MX",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Adhara Clínica Spa | Belleza que Evoluciona",
    description: "Tratamientos de alta gama y micropigmentación profesional en Lindavista, CDMX.",
    images: ["/adhara-og.jpeg"],
  },
  alternates: {
    canonical: "https://adharaspa.com",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon-adhara.png?v=5", type: "image/png" },
      { url: "/favicon-adhara.png?v=5", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/favicon-adhara.png?v=5", sizes: "180x180", type: "image/png" },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <head>
        <link rel="icon" href="/favicon-adhara.png?v=5" />
        <link rel="shortcut icon" href="/favicon-adhara.png?v=5" />
        <link rel="apple-touch-icon" href="/favicon-adhara.png?v=5" />
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
                "Clínica especializada en micropigmentación avanzada, tratamientos faciales clínicos y corporales de alta gama.",
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
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
