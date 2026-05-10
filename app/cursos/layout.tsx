
import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"

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
    
    <>
      {children}
    </>
    
  );
}