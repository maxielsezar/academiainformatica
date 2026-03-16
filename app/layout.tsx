import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cursos de Informática",
  description: "Formación profesional en tecnología",
  icons: {
    icon: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className="bg-white text-gray-900 dark:bg-black dark:text-gray-100">{children}</body>
    </html>
  );
}