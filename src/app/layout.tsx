import type { Metadata } from "next";
import { Work_Sans, Open_Sans } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const workSans = Work_Sans({
  subsets: ["latin"],
  variable: "--font-work-sans",
  display: "swap",
});

const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-open-sans",
  display: "swap",
});

const GA_MEASUREMENT_ID = 'G-7HGVC0VC3H';

export const metadata: Metadata = {
  title: "Jose Katriel | Creative Portfolio",
  description: "Portfolio showcasing my creative work in design and development. Explore my projects and get in touch!",
  keywords: ["portfolio", "design", "development", "creative", "web design", "UI/UX"],
  authors: [{ name: 'Jose Katriel' }],
  creator: 'Jose Katriel',
  publisher: 'Jose Katriel',
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://web-portfolio-omega-brown.vercel.app'),
  openGraph: {
    title: 'Jose Katriel | Creative Portfolio',
    description: 'Portfolio showcasing my creative work in design and development.',
    url: '/',
    siteName: 'Jose Katriel',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/images/og-image.jpg', // Replace with your actual OG image
        width: 1200,
        height: 630,
        alt: 'Jose Katriel Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Jose Katriel | Creative Portfolio',
    description: 'Portfolio showcasing my creative work in design and development.',
    creator: '@katrjjjj', // Replace with your Twitter handle
    images: ['/images/twitter-image.jpg'], // Replace with your Twitter card image
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
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link href="https://cdn.jsdelivr.net/npm/remixicon@2.5.0/fonts/remixicon.css" rel="stylesheet" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* Google tag (gtag.js) */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}', {
              page_path: window.location.pathname,
            });
          `}
        </Script>
      </head>
      <body
        className={`${workSans.variable} ${openSans.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
