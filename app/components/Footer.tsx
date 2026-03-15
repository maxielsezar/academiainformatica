export default function Footer() {
  return (
    <footer id="contacto" className="bg-blue-900 text-blue-200 py-16">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Grid 3 columnas */}
        <div className="grid md:grid-cols-3 gap-10 text-center md:text-left">

          {/* Columna 1 */}
          <div>
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
              <li>
                <a href="#" className="hover:text-white transition">
                  Inicio
                </a>
              </li>
              <li>
                <a href="#cursos" className="hover:text-white transition">
                  Cursos
                </a>
              </li>
             
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
