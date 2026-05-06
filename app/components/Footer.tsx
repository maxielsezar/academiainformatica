import Image from "next/image";

export default function Footer() {
  const sections = [
  { name: "Inicio", href: "#" },
  { name: "Formación", href: "#cursos" },
  { name: "Metodología", href: "#metodologia" },
  { name: "Resultados", href: "#resultados" },
  { name: "Por qué elegirnos", href: "#enfoque" },
  { name: "Certificación", href: "#certificacion" },
  { name: "Contenido", href: "#contenido" }
];
  return (
    <footer id="contacto" className="bg-blue-800 text-blue-200 py-16">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Grid 3 columnas */}
        <div className="grid md:grid-cols-3 gap-10 text-center md:text-left">

          {/* Columna 1 */}

          <div className="flex flex-col items-center text-center md:items-start md:text-left gap-3 mb-4">
              <Image
                src="/logo.png"
                alt="Logo CFP 655"
                width={60}
                height={60}
                className="object-contain"
              />
            <h4 className="text-white text-xl font-semibold mb-4">
              Cursos de Informática
            </h4>
            <p className="text-sm mb-4">
              Formando a los profesionales digitales del futuro.
            </p>
            <p className="text-sm">
              Dirección: Chacabuco 1036
            </p>
          </div>

          {/* Columna 2 */}
          <div>
            <h4 className="text-white text-lg font-semibold mb-4">
              Navegación
            </h4>
              <ul className="space-y-2 text-sm">
                {sections.map((section, index) => (
                  <li key={index}>
                    <a
                      href={section.href}
                      className="hover:text-white transition"
                    >
                      {section.name}
                    </a>
                  </li>
                ))}
               </ul>
          </div>

          {/* Columna 3 */}
          <div>
            <h4 className="text-white text-lg font-semibold mb-4">
              Contacto
            </h4>
            <a
              href="https://wa.me/5492945583234"
            >
            <p className="text-sm mb-2 hover:text-white">
              WhatsApp: +54 9 2945 583234
            </p>
            </a>
           

            
            <a
              href="https://maxielsezar.com"
            >
              <p className="text-sm mb-4 hover:text-white">
                Instrucctor Maximiliano Elsezar
              </p>
            </a>

            
          </div>

        </div>

        {/* Línea separadora */}
        <div className="w-full h-px bg-blue-800 my-10"></div>

        {/* Copyright */}
        <p className="text-center text-sm text-blue-400">
          © 2026 Cursos de Informática. Todos los derechos reservados.
        </p>

      </div>
    </footer>
  );
}
