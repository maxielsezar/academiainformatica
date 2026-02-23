import { cursos } from "../../../../data/cursos";
import { notFound } from "next/navigation";

interface Props {
  params: Promise<{
    curso: string;
    id: string;
  }>;
}

export default async function ModuloPage({ params }: Props) {
  const { curso, id } = await params;

  const cursoData = cursos[curso as keyof typeof cursos];

  if (!cursoData) notFound();

  const modulo = cursoData.modulos.find(
    (m) => m.id === Number(id)
  );

  if (!modulo) notFound();

  return (
    <main className="max-w-5xl mx-auto px-6 py-32">
    
        {(curso === "operador-pc" && Number(id) === 1) &&
    <div>
      
      <h1 className="text-4xl font-bold text-blue-900 mb-6">
        Módulo 1: Introducción a la Informática
      </h1>

      <p className="text-gray-700 leading-relaxed mb-12">
        Este módulo introduce al estudiante en los fundamentos del entorno
        informático, brindando conocimientos esenciales sobre el funcionamiento
        de la computadora, sus componentes y el uso básico del sistema operativo.
      </p>

      {/* Objetivos */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold text-blue-800 mb-4">
          Objetivos
        </h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>Comprender los conceptos fundamentales de informática.</li>
          <li>Identificar componentes físicos y lógicos de la computadora.</li>
          <li>Manejar correctamente el sistema operativo.</li>
          <li>Organizar información digital de manera eficiente.</li>
        </ul>
      </section>

      {/* Desarrollo */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold text-blue-800 mb-6">
          Desarrollo de Contenidos
        </h2>

        <div className="space-y-10">

          <div>
            <h3 className="text-xl font-semibold text-blue-900">
              1. Conceptos básicos
            </h3>
            <p className="text-gray-700 mt-3 leading-relaxed">
              Definición de informática, diferencia entre dato e información,
              importancia de la tecnología en el ámbito laboral y educativo.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-blue-900">
              2. Hardware
            </h3>
            <p className="text-gray-700 mt-3 leading-relaxed">
              Componentes principales: CPU, memoria RAM, almacenamiento,
              periféricos de entrada (teclado, mouse, escáner) y salida
              (monitor, impresora).
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-blue-900">
              3. Software
            </h3>
            <p className="text-gray-700 mt-3 leading-relaxed">
              Diferencia entre sistema operativo y programas de aplicación.
              Ejemplos prácticos: procesador de textos, navegadores, antivirus.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-blue-900">
              4. Sistema Operativo
            </h3>
            <p className="text-gray-700 mt-3 leading-relaxed">
              Uso del escritorio, ventanas, administración de archivos,
              carpetas, configuraciones básicas y explorador de archivos.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-blue-900">
              5. Organización de archivos
            </h3>
            <p className="text-gray-700 mt-3 leading-relaxed">
              Crear, mover, copiar y eliminar archivos. Uso de pendrive
              y almacenamiento externo.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-blue-900">
              6. Seguridad informática básica
            </h3>
            <p className="text-gray-700 mt-3 leading-relaxed">
              Buenas prácticas digitales, uso seguro de contraseñas,
              prevención de virus y copias de seguridad.
            </p>
          </div>

        </div>
      </section>

      {/* Actividades */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold text-blue-800 mb-4">
          Actividades Prácticas
        </h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>Reconocimiento físico de componentes del equipo.</li>
          <li>Creación de estructura de carpetas organizada.</li>
          <li>Configuración básica del sistema operativo.</li>
          <li>Simulación de copia de seguridad en dispositivo externo.</li>
        </ul>
      </section>

      {/* Evaluación */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold text-blue-800 mb-4">
          Evaluación
        </h2>
        <p className="text-gray-700 leading-relaxed">
          Evaluación práctica mediante resolución de actividades
          de organización y manejo del sistema operativo, junto
          con cuestionario teórico sobre conceptos fundamentales.
        </p>
      </section>

      {/* Navegación */}
      <div className="flex justify-between border-t pt-8">
        <a
          href="/cursos/operador-pc"
          className="text-blue-700 hover:underline"
        >
          ← Volver al curso
        </a>

        <a
          href="/cursos/operador-pc/modulo/2"
          className="text-blue-700 hover:underline"
        >
          Siguiente módulo →
        </a>
      </div>

    </div>
}
    </main>
  );
}