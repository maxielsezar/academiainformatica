import "./globals.css";
import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  metadataBase: new URL("https://cursoinformatica.digital"),

  title: {
    default: "Cursos de Informática Online Gratis | Excel, Word, Photoshop y Programación",
    template: "%s | Cursos de Informática",
  },

  description:
    "Aprendé informática desde cero con cursos online gratis de Excel, Word, Photoshop y programación. Clases prácticas paso a paso con certificado en Argentina.",

  keywords: [
    "cursos de informática",
    "cursos online gratis",
    "curso de Excel básico",
    "curso Word principiantes",
    "curso Photoshop desde cero",
    "programación desde cero",
    "curso Diseño web desde cero",
    "cursos con certificado Argentina",
    "aprender computación fácil",
    "cursos de informática gratis online"
  ],

  authors: [{ name: "Cursos de Informática" }],
  creator: "Cursos de Informática",
  publisher: "Cursos de Informática",

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: "Cursos de Informática Online Gratis",
    description:
      "Aprendé Excel, Word, Photoshop y programación desde cero con cursos prácticos y certificados.",
    url: "https://cursoinformatica.digital",
    siteName: "Cursos de Informática",
    images: [
      {
        url: "/logo.png", // usa metadataBase
        width: 1200,
        height: 630,
        alt: "Cursos de informática online",
      },
    ],
    locale: "es_AR",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Cursos de Informática Online Gratis",
    description:
      "Cursos de Excel, Word, Photoshop y programación desde cero con certificado.",
    images: ["/logo.png"],
  },

  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },

  alternates: {
    canonical: "https://cursoinformatica.digital",
  },

  category: "education",
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <head>
        <Script
          async
          strategy="afterInteractive"
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7700991264412300"
          crossOrigin="anonymous"
        />
      </head>
      <body className="bg-white text-gray-900 dark:bg-black dark:text-gray-100">{children}</body>
    </html>
  );
}