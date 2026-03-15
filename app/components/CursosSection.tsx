import CursoCard from "./CursoCard";
import ShinyText from "./ShinyText";

export default function CursosSection() {
  return (
    <section id="cursos" className="py-31">
      <div className="max-w-6xl mx-auto px-6">
        
        <div className="text-center mb-20">
          
          <h2 className="text-4xl font-bold text-blue-900 dark:text-blue-600 mb-4">
            <ShinyText
            text="Oferta Académica"
            speed={2}
            delay={0}
            color="#3c36fe"
            shineColor="#36d7f4"
            spread={120}
            direction="left"
            yoyo={false}
            pauseOnHover={false}
            disabled={false}
          />
          </h2>
          <div className="w-24 h-1 bg-blue-900 mx-auto mb-6"></div>
          <p className=" max-w-2xl mx-auto">
            Programas diseñados para brindar competencias técnicas reales 
            y preparación para el ámbito laboral actual.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          <CursoCard
            titulo="Informática Multimedial"
            descripcion="Diseño gráfico, edición de imágenes y producción multimedia."
            duracion="125 horas"
            slug="informatica-multimedial"
          />

          <CursoCard
            titulo="Operador de PC"
            descripcion="Manejo profesional de herramientas informáticas."
            duracion="125 horas"
            slug="operador-pc"
          />

          <CursoCard
            titulo="Programador"
            descripcion="Fundamentos de programación y desarrollo"
            duracion="364 horas"
            slug="programador"
          />
        </div>
      </div>
    </section>
  );
}