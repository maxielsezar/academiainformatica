import { cursos } from "../../data/cursos";
import ModuleAccordion from "../../components/ModuleAccordion";
import Navbar from "@/app/components/Navbar";


export default async function CursoPage() {

  const cursoData=cursos.multimedial

  return (
    <main className="max-w-6xl mx-auto px-6 py-6 md:py-32 grid md:grid-cols-3 gap-12 md:mt-0 mt-28">
      <Navbar main={false} />
      {/* Columna izquierda */}
      <div className="md:col-span-2">
        <h1 className="text-4xl font-bold text-blue-900 mb-6">
          {cursoData.titulo}
        </h1>

        <p className=" mb-6">
          {cursoData.descripcion}
        </p>

        <p className="mb-2">
          <strong>Duración:</strong> {cursoData.duracion}
        </p>

        <p className="mb-6">
          <strong>Modalidad:</strong> {cursoData.modalidad}
        </p>
        <div className="mt-10">
          <h2 className="text-2xl font-semibold text-blue-900 mb-4">
            Perfil del Egresado
          </h2>

          <p className=" leading-relaxed">
            {cursoData.perfilEgresado}
          </p>
        </div>
      </div>

      {/* Sidebar */}
      <aside>
        <div className="sticky top-32 border border-gray-200 rounded-2xl p-8 shadow-sm">
          <h3 className="text-xl font-semibold text-blue-800 mb-6">
            Módulos
          </h3>
        <ModuleAccordion 
          modulos={cursoData.modulos} 
          slug={cursoData.slug}
        />
        </div>
      </aside>
    </main>
  );
}