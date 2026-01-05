import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "FitForge - מאמן כושר אישי | חדר כושר וקליסטניקס בתל אביב",
  description: "FitForge מציע שילוב ייחודי של אימוני כוח בחדר כושר וקליסטניקס מתקדם. תוכניות אימון אישיות, ליווי מקצועי ותוצאות מוכחות. קבע אימון ניסיון חינם!",
  keywords: [
    "מאמן כושר אישי",
    "חדר כושר תל אביב",
    "קליסטניקס",
    "אימוני כוח",
    "בניית שריר",
    "ירידה במשקל",
    "FitForge",
    "אימון אישי",
    "כושר גופני",
    "תזונה ספורטיבית"
  ],
  authors: [{ name: "FitForge" }],
  creator: "FitForge Personal Training",
  publisher: "FitForge",
  
  // Open Graph (Facebook, LinkedIn, WhatsApp)
  openGraph: {
    type: "website",
    locale: "he_IL",
    url: "https://fitforge-app.netlify.app",
    title: "FitForge - ליצור את הכושר שלך | מאמן כושר אישי בתל אביב",
    description: "שילוב מושלם של אימוני כוח וקליסטניקס לתוצאות מקסימליות. 500+ לקוחות מרוצים, 98% שביעות רצון. התחל היום!",
    siteName: "FitForge",
    images: [
      {
        url: "https://fitforge-app.netlify.app/og-image-fitforge.jpg",
        width: 1200,
        height: 630,
        alt: "FitForge - מאמן כושר אישי בתל אביב",
        type: "image/jpeg",
      },
    ],
  },

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    title: "FitForge - ליצור את הכושר שלך",
    description: "שילוב ייחודי של חדר כושר וקליסטניקס. אימון ניסיון חינם!",
    images: ["https://fitforge-app.netlify.app/og-image-fitforge.jpg"],
  },

  // Robots
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // Verification
  verification: {
    google: "your-google-verification-code",
  },

  // Additional
  category: "fitness",
  classification: "Personal Training, Fitness, Gym",
  
  // Viewport
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
  },

  // Theme Color
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f97316" },
    { media: "(prefers-color-scheme: dark)", color: "#0f172a" },
  ],

  // Alternate languages
  alternates: {
    canonical: "https://fitforge-app.netlify.app",
    languages: {
      "he-IL": "https://fitforge-app.netlify.app",
      "en-US": "https://fitforge-app.netlify.app/en",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="he" dir="rtl">
      <head>
        {/* JSON-LD Schema Markup for Local Business */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "@id": "https://fitforge-app.netlify.app",
              name: "FitForge",
              description: "מאמן כושר אישי - שילוב של חדר כושר וקליסטניקס",
              url: "https://fitforge-app.netlify.app",
              telephone: "+972-50-123-4567",
              email: "info@fitforge.co.il",
              address: {
                "@type": "PostalAddress",
                streetAddress: "רחוב דוגמה 1",
                addressLocality: "תל אביב",
                postalCode: "12345",
                addressCountry: "IL",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: "32.0853",
                longitude: "34.7818",
              },
              image: "https://fitforge-app.netlify.app/og-image-fitforge.jpg",
              priceRange: "₪₪",
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Sunday"],
                  opens: "06:00",
                  closes: "22:00",
                },
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: "Friday",
                  opens: "06:00",
                  closes: "14:00",
                },
              ],
              sameAs: [
                "https://www.facebook.com/fitforge",
                "https://www.instagram.com/fitforge",
              ],
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.9",
                reviewCount: "500",
              },
              offers: [
                {
                  "@type": "Offer",
                  name: "אימון אישי - חבילת Basis",
                  price: "399",
                  priceCurrency: "ILS",
                  availability: "https://schema.org/InStock",
                },
                {
                  "@type": "Offer",
                  name: "אימון אישי - חבילת Pro",
                  price: "649",
                  priceCurrency: "ILS",
                  availability: "https://schema.org/InStock",
                },
                {
                  "@type": "Offer",
                  name: "אימון אישי - חבילת Elite",
                  price: "899",
                  priceCurrency: "ILS",
                  availability: "https://schema.org/InStock",
                },
              ],
            }),
          }}
        />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
