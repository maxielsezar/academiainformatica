
import type { Metadata } from "next";
import Navbar from "../components/Navbar";

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