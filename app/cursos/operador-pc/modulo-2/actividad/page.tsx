export default function ActividadFinalWordPage() {
  return (
    <div className="space-y-14">

      {/* Título */}
      <section>
        <h1 className="text-3xl font-bold text-blue-900 mb-6">
          Actividad Final – Módulo 2: Microsoft Word
        </h1>

        <p className="leading-relaxed max-w-3xl">
          En esta actividad vas a aplicar todos los conocimientos aprendidos sobre
          el uso de Word, creando un documento completo con formato, estructura y diseño.
        </p>
      </section>

      {/* Objetivo */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Objetivo
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Crear un documento en Word que cumpla con criterios de organización,
          presentación y uso de herramientas básicas del programa.
        </p>
      </section>

      {/* Consigna */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Consigna
        </h2>

        <p className="leading-relaxed max-w-3xl">
          Realizar un documento sobre el siguiente tema:
        </p>

        <div className="border p-6 rounded-xl max-w-3xl mt-4">
          <p className="font-semibold">
            “La importancia de la tecnología en la vida cotidiana”
          </p>
        </div>
      </section>

      {/* Requisitos */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Requisitos del trabajo
        </h2>

        <ul className="list-disc list-inside space-y-3">

          <li>
            <strong>Portada:</strong> título, nombre del alumno, curso y fecha.
          </li>

          <li>
            <strong>Formato:</strong> fuente Arial o Times New Roman, tamaño 12,
            títulos en negrita y texto justificado.
          </li>

          <li>
            <strong>Estructura:</strong> introducción, desarrollo (mínimo 2 párrafos)
            y conclusión.
          </li>

          <li>
            <strong>Elementos:</strong> incluir una lista, una imagen y una tabla simple.
          </li>

          <li>
            <strong>Diseño:</strong> uso de alineación, espaciado y organización clara.
          </li>

        </ul>
      </section>

      {/* Evaluación */}
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          Criterios de evaluación
        </h2>

        <ul className="list-disc list-inside space-y-3">
          <li>Correcto uso de herramientas de Word.</li>
          <li>Presentación y prolijidad.</li>
          <li>Organización de la información.</li>
          <li>Cumplimiento de los requisitos.</li>
          <li>Creatividad.</li>
        </ul>
      </section>

    </div>
  );
}