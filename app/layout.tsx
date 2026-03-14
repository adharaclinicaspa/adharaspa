import type { Metadata } from "next";
import "./globals.css";
import { TopBanner } from "./components/ui/TopBanner";

export const metadata: Metadata = {
  metadataBase: new URL('https://adharaclinicaspa.com'),
  title: {
    default: "Adhara Clínica Spa | Micropigmentación y Estética de Lujo en CDMX",
    template: "%s | Adhara Clínica Spa"
  },
  description:
    "Especialistas en Micropigmentación artística, tratamientos faciales avanzados y protocolos corporales con tecnología de vanguardia. Resultados reales para tu belleza natural en CDMX.",
  keywords: [
    "micropigmentación CDMX", "clínica estética Lindavista", "tratamientos faciales de lujo México",
    "depilación láser profesional", "spa de lujo CDMX", "cejas powder brows México",
    "rejuvenecimiento facial avanzado", "Adhara Clínica Spa"
  ],
  openGraph: {
    title: "Adhara Clínica Spa | Micropigmentación y Estética de Lujo",
    description:
      "Descubre el arte del cuidado consciente. Micropigmentación, faciales y tecnología estética de élite en Ciudad de México.",
    url: "https://adharaclinicaspa.com",
    siteName: "Adhara Clínica Spa",
    images: [
      {
        url: "https://scwu2vendl74s1qu.public.blob.vercel-storage.com/favicon%20adhara.png",
        width: 1200,
        height: 630,
        alt: "Adhara Clínica Spa Logo",
      },
    ],
    locale: "es_MX",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Adhara Clínica Spa | Belleza que Evoluciona",
    description: "Tratamientos estéticos de lujo y micropigmentación profesional en Lindavista, CDMX.",
    images: ["https://scwu2vendl74s1qu.public.blob.vercel-storage.com/favicon%20adhara.png"],
  },
  alternates: {
    canonical: "https://adharaclinicaspa.com",
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
      { url: "https://scwu2vendl74s1qu.public.blob.vercel-storage.com/favicon%20adhara.png" },
      { url: "https://scwu2vendl74s1qu.public.blob.vercel-storage.com/favicon%20adhara.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "https://scwu2vendl74s1qu.public.blob.vercel-storage.com/favicon%20adhara.png", sizes: "180x180", type: "image/png" },
    ],
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
