
import type { Metadata } from "next";
import NavbarCurso from "../components/NavbarCurso";
// armar el navbar

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
    <div>  {children}</div>
    
  );
}