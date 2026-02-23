import CursoCard from "./CursoCard";

export default function CursosSection() {
  return (
    <section id="cursos" className="py-28 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        
        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold text-blue-900 mb-4">
            Oferta Académica
          </h2>
          <div className="w-24 h-1 bg-blue-900 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Programas diseñados para brindar competencias técnicas reales 
            y preparación para el ámbito laboral actual.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          <CursoCard
            titulo="Informática Multimedial"
            descripcion="Diseño gráfico, edición de imágenes y producción multimedia."
            duracion="4 meses"
            slug="informatica-multimedial"
          />

          <CursoCard
            titulo="Operador de PC"
            descripcion="Manejo profesional de herramientas informáticas."
            duracion="4 meses"
            slug="operador-pc"
          />

          <CursoCard
            titulo="Programador"
            descripcion="Fundamentos de programación y desarrollo web."
            duracion="6 meses"
            slug="programador"
          />
        </div>
      </div>
    </section>
  );
}